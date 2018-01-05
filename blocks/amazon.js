/* global */
import AmazonBlock from '../components/AmazonBlock';
import AffiliateItem from '../components/AffiliateItem';

const __ = wp.i18n.__;

export default {
	name: 'amazon-block/amazon-block',
	title: __( 'Amazon' ),
	icon: 'universal-access-alt',
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
