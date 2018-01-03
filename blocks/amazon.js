/* global */
import AmazonBlock from '../components/AmazonBlock';

const __ = wp.i18n.__;

export default {
	name: 'amazon-block/amazon-block',
	title: __( 'Amazon' ),
	icon: 'universal-access-alt',
	category: 'common',
	attributes: {
		shortcode: {
			type: 'string',
		},
	},
	edit( { attributes, setAttributes } ) {
		return (
			<AmazonBlock
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		);
	},
	save: () => null,
};
