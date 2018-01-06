import AmazonBlock from '../components/AmazonBlock';
import AffiliateItem from '../components/AffiliateItem';

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
		return <AffiliateItem item={ attributes.item } />;
	},
};
