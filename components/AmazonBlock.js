/* global React */

import Search from './Search';
import SelectTemplate from './SelectTemplate';
import AffiliateItem from './AffiliateItem';
import event from '../utils/EventBus';

export default class AmazonBlock extends React.Component {
	componentDidMount() {
		event.on( 'SET_ITEM', ( item, prevItem ) => {
			if ( ! this.props.attributes.item ) {
				this.props.setAttributes( { item } );
			} else if ( prevItem.ASIN === this.props.attributes.item.ASIN ) {
				this.props.setAttributes( { item } );
			}
		} );
		event.on( 'SET_TEMPLATE', ( template ) => {
			if ( ! this.props.attributes.template ) {
				this.props.setAttributes( { template } );
			}
		} );
	}

	render() {
		const { item, template } = this.props.attributes;
		if ( item && template ) {
			return <AffiliateItem item={ item } template={ template } />;
		} else if ( item ) {
			return (
				<SelectTemplate item={ item } />
			);
		}

		return <Search />;
	}
}
