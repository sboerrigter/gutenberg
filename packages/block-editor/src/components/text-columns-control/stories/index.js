/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TextColumnsControl from '../';

export default {
	title: 'BlockEditor/TextColumnsControl',
	component: TextColumnsControl,
	argTypes: {
		onChange: { action: 'onChange' },
	},
};

const Template = ( { onChange, ...args } ) => {
	const [ value, setValue ] = useState();
	return (
		<TextColumnsControl
			{ ...args }
			onChange={ ( ...changeArgs ) => {
				onChange( ...changeArgs );
				setValue( ...changeArgs );
			} }
			value={ value }
		/>
	);
};

export const Default = Template.bind( {} );
