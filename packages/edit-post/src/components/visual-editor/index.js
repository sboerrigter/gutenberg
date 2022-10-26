/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	VisualEditorGlobalKeyboardShortcuts,
	PostTitle,
	store as editorStore,
} from '@wordpress/editor';
import {
	WritingFlow,
	BlockList,
	BlockTools,
	store as blockEditorStore,
	__unstableUseBlockSelectionClearer as useBlockSelectionClearer,
	__unstableUseTypewriter as useTypewriter,
	__unstableUseClipboardHandler as useClipboardHandler,
	__unstableUseTypingObserver as useTypingObserver,
	__unstableBlockSettingsMenuFirstItem,
	__experimentalUseResizeCanvas as useResizeCanvas,
	__unstableEditorStyles as EditorStyles,
	useSetting,
	__experimentalLayoutStyle as LayoutStyle,
	__unstableUseMouseMoveTypingReset as useMouseMoveTypingReset,
	__unstableIframe as Iframe,
	__experimentalRecursionProvider as RecursionProvider,
	__experimentaluseLayoutClasses as useLayoutClasses,
	__experimentaluseLayoutStyles as useLayoutStyles,
} from '@wordpress/block-editor';
import { useEffect, useRef, useMemo } from '@wordpress/element';
import { Button, __unstableMotion as motion } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useMergeRefs } from '@wordpress/compose';
import { arrowLeft } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import BlockInspectorButton from './block-inspector-button';
import { store as editPostStore } from '../../store';

function MaybeIframe( {
	children,
	contentRef,
	shouldIframe,
	styles,
	assets,
	style,
} ) {
	const ref = useMouseMoveTypingReset();

	if ( ! shouldIframe ) {
		return (
			<>
				<EditorStyles styles={ styles } />
				<WritingFlow
					ref={ contentRef }
					className="editor-styles-wrapper"
					style={ { flex: '1', ...style } }
					tabIndex={ -1 }
				>
					{ children }
				</WritingFlow>
			</>
		);
	}

	return (
		<Iframe
			head={ <EditorStyles styles={ styles } /> }
			assets={ assets }
			ref={ ref }
			contentRef={ contentRef }
			style={ { width: '100%', height: '100%', display: 'block' } }
			name="editor-canvas"
		>
			{ children }
		</Iframe>
	);
}

export default function VisualEditor( { styles } ) {
	const {
		deviceType,
		isWelcomeGuideVisible,
		isTemplateMode,
		postContentBlock,
		wrapperBlockName,
		wrapperUniqueId,
	} = useSelect( ( select ) => {
		const {
			isFeatureActive,
			isEditingTemplate,
			__experimentalGetPreviewDeviceType,
		} = select( editPostStore );
		const { getCurrentPostId, getCurrentPostType, getEditorSettings } =
			select( editorStore );
		const _isTemplateMode = isEditingTemplate();
		let _wrapperBlockName;

		if ( getCurrentPostType() === 'wp_block' ) {
			_wrapperBlockName = 'core/block';
		} else if ( ! _isTemplateMode ) {
			_wrapperBlockName = 'core/post-content';
		}

		return {
			deviceType: __experimentalGetPreviewDeviceType(),
			isWelcomeGuideVisible: isFeatureActive( 'welcomeGuide' ),
			isTemplateMode: _isTemplateMode,
			postContentBlock: getEditorSettings().postContentBlock,
			wrapperBlockName: _wrapperBlockName,
			wrapperUniqueId: getCurrentPostId(),
		};
	}, [] );
	const { isCleanNewPost } = useSelect( editorStore );
	const hasMetaBoxes = useSelect(
		( select ) => select( editPostStore ).hasMetaBoxes(),
		[]
	);
	const {
		themeHasDisabledLayoutStyles,
		themeSupportsLayout,
		assets,
		isFocusMode,
	} = useSelect( ( select ) => {
		const _settings = select( blockEditorStore ).getSettings();
		return {
			themeHasDisabledLayoutStyles: _settings.disableLayoutStyles,
			themeSupportsLayout: _settings.supportsLayout,
			assets: _settings.__unstableResolvedAssets,
			isFocusMode: _settings.focusMode,
		};
	}, [] );
	const { clearSelectedBlock } = useDispatch( blockEditorStore );
	const { setIsEditingTemplate } = useDispatch( editPostStore );
	const desktopCanvasStyles = {
		height: '100%',
		width: '100%',
		margin: 0,
		display: 'flex',
		flexFlow: 'column',
		// Default background color so that grey
		// .edit-post-editor-regions__content color doesn't show through.
		background: 'white',
	};
	const templateModeStyles = {
		...desktopCanvasStyles,
		borderRadius: '2px 2px 0 0',
		border: '1px solid #ddd',
		borderBottom: 0,
	};
	const resizedCanvasStyles = useResizeCanvas( deviceType, isTemplateMode );
	const globalLayoutSettings = useSetting( 'layout' );
	const previewMode = 'is-' + deviceType.toLowerCase() + '-preview';

	let animatedStyles = isTemplateMode
		? templateModeStyles
		: desktopCanvasStyles;
	if ( resizedCanvasStyles ) {
		animatedStyles = resizedCanvasStyles;
	}

	let paddingBottom;

	// Add a constant padding for the typewritter effect. When typing at the
	// bottom, there needs to be room to scroll up.
	if ( ! hasMetaBoxes && ! resizedCanvasStyles && ! isTemplateMode ) {
		paddingBottom = '40vh';
	}

	const ref = useRef();
	const contentRef = useMergeRefs( [
		ref,
		useClipboardHandler(),
		useTypewriter(),
		useTypingObserver(),
		useBlockSelectionClearer(),
	] );

	const blockSelectionClearerRef = useBlockSelectionClearer();

	// fallbackLayout is used if there is no Post Content,
	// and for Post Title.
	const fallbackLayout = useMemo( () => {
		if ( isTemplateMode ) {
			return { type: 'default' };
		}

		if ( themeSupportsLayout ) {
			// We need to ensure support for wide and full alignments,
			// so we add the constrained type.
			return { ...globalLayoutSettings, type: 'constrained' };
		}
		// Set default layout for classic themes so all alignments are supported.
		return { type: 'default' };
	}, [ isTemplateMode, themeSupportsLayout, globalLayoutSettings ] );

	const postContentLayoutClasses = useLayoutClasses( postContentBlock );

	const blockListLayoutClass = classnames(
		{
			'is-layout-flow': ! themeSupportsLayout,
		},
		themeSupportsLayout && postContentLayoutClasses
	);

	const postContentLayoutStyles = useLayoutStyles(
		postContentBlock,
		'.block-editor-block-list__layout.is-root-container'
	);

	const layout = postContentBlock?.attributes?.layout || {};

	// Update type for blocks using legacy layouts.
	const postContentLayout = useMemo( () => {
		return layout &&
			( layout?.type === 'constrained' ||
				layout?.inherit ||
				layout?.contentSize ||
				layout?.wideSize )
			? { ...globalLayoutSettings, ...layout, type: 'constrained' }
			: { ...globalLayoutSettings, ...layout, type: 'default' };
	}, [
		layout?.type,
		layout?.inherit,
		layout?.contentSize,
		layout?.wideSize,
		globalLayoutSettings,
	] );

	// If there is a Post Content block we use its layout for the block list;
	// if not, this must be a classic theme, in which case we use the fallback layout.
	const blockListLayout = postContentBlock
		? postContentLayout
		: fallbackLayout;

	const titleRef = useRef();
	useEffect( () => {
		if ( isWelcomeGuideVisible || ! isCleanNewPost() ) {
			return;
		}
		titleRef?.current?.focus();
	}, [ isWelcomeGuideVisible, isCleanNewPost ] );

	return (
		<BlockTools
			__unstableContentRef={ ref }
			className={ classnames( 'edit-post-visual-editor', {
				'is-template-mode': isTemplateMode,
			} ) }
		>
			<VisualEditorGlobalKeyboardShortcuts />
			<motion.div
				className="edit-post-visual-editor__content-area"
				animate={ {
					padding: isTemplateMode ? '48px 48px 0' : '0',
				} }
				ref={ blockSelectionClearerRef }
			>
				{ isTemplateMode && (
					<Button
						className="edit-post-visual-editor__exit-template-mode"
						icon={ arrowLeft }
						onClick={ () => {
							clearSelectedBlock();
							setIsEditingTemplate( false );
						} }
					>
						{ __( 'Back' ) }
					</Button>
				) }
				<motion.div
					animate={ animatedStyles }
					initial={ desktopCanvasStyles }
					className={ previewMode }
				>
					<MaybeIframe
						shouldIframe={
							isTemplateMode ||
							deviceType === 'Tablet' ||
							deviceType === 'Mobile'
						}
						contentRef={ contentRef }
						styles={ styles }
						assets={ assets }
						style={ { paddingBottom } }
					>
						{ themeSupportsLayout &&
							! themeHasDisabledLayoutStyles &&
							! isTemplateMode && (
								<>
									<LayoutStyle
										selector=".edit-post-visual-editor__post-title-wrapper, .block-editor-block-list__layout.is-root-container"
										layout={ fallbackLayout }
										layoutDefinitions={
											globalLayoutSettings?.definitions
										}
									/>
									{ postContentLayoutStyles && (
										<LayoutStyle
											layout={ postContentLayout }
											css={ postContentLayoutStyles }
											layoutDefinitions={
												globalLayoutSettings?.definitions
											}
										/>
									) }
								</>
							) }
						{ ! isTemplateMode && (
							<div
								className={ classnames(
									'edit-post-visual-editor__post-title-wrapper',
									{
										'is-focus-mode': isFocusMode,
									}
								) }
								contentEditable={ false }
							>
								<PostTitle ref={ titleRef } />
							</div>
						) }
						<RecursionProvider
							blockName={ wrapperBlockName }
							uniqueId={ wrapperUniqueId }
						>
							<BlockList
								className={
									isTemplateMode
										? 'wp-site-blocks'
										: `${ blockListLayoutClass } wp-block-post-content` // Ensure root level blocks receive default/flow blockGap styling rules.
								}
								__experimentalLayout={ blockListLayout }
							/>
						</RecursionProvider>
					</MaybeIframe>
				</motion.div>
			</motion.div>
			<__unstableBlockSettingsMenuFirstItem>
				{ ( { onClose } ) => (
					<BlockInspectorButton onClick={ onClose } />
				) }
			</__unstableBlockSettingsMenuFirstItem>
		</BlockTools>
	);
}
