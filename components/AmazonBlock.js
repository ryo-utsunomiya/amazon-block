/* global React */

import { EventEmitter } from 'events';
import Search from './Search';
import SelectTemplate from './SelectTemplate';
import AffiliateItem from './AffiliateItem';

export default class AmazonBlock extends React.Component {
	constructor( props ) {
		super( props );
		this.event = new EventEmitter();
	}

	componentDidMount() {
		this.event.on( 'SET_ITEM', ( item ) => {
			this.props.setAttributes( { item } );
		} );
		this.event.on( 'SET_TEMPLATE', ( template ) => {
			this.props.setAttributes( { template } );
		} );
	}

	render() {
		const { item, template } = this.props.attributes;
		if ( item && template ) {
			return <AffiliateItem item={ item } template={ template } />;
		} else if ( item ) {
			return (
				<SelectTemplate item={ item } event={ this.event } />
			);
		}

		return <Search event={ this.event } />;
	}
}
