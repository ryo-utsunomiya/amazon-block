/* global React */

import Search from './Search';
import AffiliateItem from './AffiliateItem';
import event from '../utils/EventBus';

export default class AmazonBlock extends React.Component {
	componentDidMount() {
		event.on( 'SET_ITEM', ( item ) => {
			if ( ! this.props.attributes.item ) {
				this.props.setAttributes( { item } );
			}
		} );
	}

	render() {
		const { item } = this.props.attributes;
		if ( item ) {
			return <AffiliateItem item={ item } />;
		}
		return <Search />;
	}
}
