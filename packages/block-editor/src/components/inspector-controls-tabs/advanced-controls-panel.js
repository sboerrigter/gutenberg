/**
 * WordPress dependencies
 */
import {
	PanelBody,
	__experimentalUseSlotFills as useSlotFills,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	default as InspectorControls,
	InspectorAdvancedControls,
} from '../inspector-controls';

const AdvancedControls = () => {
	const fills = useSlotFills( InspectorAdvancedControls.slotName );
	const hasFills = Boolean( fills && fills.length );

	if ( ! hasFills ) {
		return null;
	}

	return (
		<PanelBody
			className="block-editor-block-inspector__advanced"
			title={ _x( 'Advanced', 'settings' ) }
			initialOpen={ false }
		>
			<InspectorControls.Slot group="advanced" />
		</PanelBody>
	);
};

export default AdvancedControls;
