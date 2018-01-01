/* global */
import AmazonBlock from '../components/AmazonBlock';
import AffiliateItem from '../components/AffiliateItem';
import { EventEmitter } from 'events';

const __ = wp.i18n.__;

// class EventBus {
// 	constructor() {
// 		this.event = new EventEmitter();
// 		this.handlers = {};
// 	}
//
// 	dispatch( eventName, ...args ) {
// 		this.event.emit( eventName, ...args );
// 	}
//
// 	subscribe( eventName, handler ) {
// 		this.handlers[ eventName ] = this.handlers[ eventName ] || [];
// 		this.handlers[ eventName ].push( handler );
// 		this.event.on( eventName, handler );
// 	}
//
// 	subscribeOnce( eventName, handler ) {
// 		if ( this.handlers[ eventName ] ) {
// 			return;
// 		}
// 		this.subscribe( eventName, handler );
// 	}
// }
// const event = new EventBus();
// const dispatch = ( eventName, ...args ) => {
// 	event.dispatch( eventName, ...args );
// };

const event = new EventEmitter();
const eventHandlers = {};

const dispatch = ( eventName, ...args ) => {
	event.emit( eventName, ...args );
};

const subscribe = ( eventName, handler ) => {
	eventHandlers[ eventName ] = eventHandlers[ eventName ] || [];
	eventHandlers[ eventName ].push( handler );
	event.on( eventName, handler );
};

const subscribeOnce = ( eventName, handler ) => {
	if ( eventHandlers[ eventName ] ) {
		return;
	}
	subscribe( eventName, handler );
};

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
		subscribeOnce( 'SET_ITEM', ( item ) => {
			setAttributes( {
				item,
			} );
		} );
		return (
			<AmazonBlock
				dispatch={ dispatch }
				shortcode={ attributes.shortcode }
				item={ attributes.item }
			/>
		);
	},
	save( { attributes } ) {
		return <AffiliateItem item={ attributes.item } />;
	},
};
