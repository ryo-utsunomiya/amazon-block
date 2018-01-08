import AmazonBlock from '../components/AmazonBlock';

const { __ } = wp.i18n;

export default {
	name: 'amazon-block/amazon-block',
	title: __( 'Amazon' ),
	icon: 'cart',
	category: 'common',
	attributes: {
		item: {
			type: 'object',
		},
		template: {
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
	save( { attributes } ) {
		return (
			<AmazonBlock
				attributes={ attributes }
			/>
		);
	},
};
