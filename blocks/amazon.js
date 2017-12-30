import AmazonBlock from '../components/AmazonBlock';
import { EventEmitter } from 'events';

const event = new EventEmitter();
const eventHandlers = {};

const dispatch = ( eventName, ...args ) => {
	event.emit( eventName, ...args );
};

const subscribe = ( eventName, handler ) => {
	if ( eventHandlers[ eventName ] ) {
		return;
	}
	eventHandlers[ eventName ] = handler;
	event.on( eventName, handler );
};

export default {
	name: 'amazon-block/amazon-block',
	title: 'Amazon',
	icon: 'universal-access-alt',
	category: 'common',
	attributes: {
		shortcode: {
			type: 'string',
			source: 'text',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		subscribe( 'shortcode', ( shortcode ) => {
			setAttributes( {
				shortcode,
			} );
		} );
		return (
			<AmazonBlock
				dispatch={ dispatch }
				shortcode={ attributes.shortcode }
			/>
		);
	},
	save: ( { attributes } ) => {
		return attributes.shortcode;
	},
};
