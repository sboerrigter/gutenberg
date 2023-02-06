/**
 * WordPress dependencies
 */
import {
	Path,
	SVG,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const COLUMN_OPTIONS = [
	{
		value: 1,
		label: __( 'One column' ),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
				/>
			</SVG>
		),
	},
	{
		value: 2,
		label: __( 'Two columns' ),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
				/>
			</SVG>
		),
	},
	{
		value: 3,
		label: __( 'Three columns' ),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
				/>
			</SVG>
		),
	},
];

/**
 * Control to facilitate text column selections.
 *
 * @param {Object}   props             Component props.
 * @param {string}   props.value       Currently selected text columns value.
 * @param {Function} props.onChange    Handles change in text columns selection.
 * @param {string}   [props.className] Additional class name to apply.
 *
 * @return {WPElement} Text columns control.
 */
export default function TextColumnsControl( { value, onChange, className } ) {
	return (
		<ToggleGroupControl
			__nextHasNoMarginBottom
			isDeselectable
			className={ className }
			label={ __( 'Text columns' ) }
			value={ value }
			onChange={ onChange }
			size="__unstable-large"
		>
			{ COLUMN_OPTIONS.map( ( { value: columns, icon, label } ) => {
				return (
					<ToggleGroupControlOptionIcon
						key={ columns }
						value={ columns }
						icon={ icon }
						label={ label }
					/>
				);
			} ) }
		</ToggleGroupControl>
	);
}
