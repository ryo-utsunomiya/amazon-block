/* global React */
import { EventEmitter } from 'events';

/**
 * @see https://github.com/hokaccha/react-micro-container/blob/master/src/micro_container.js
 */
export default class ContainerBase extends React.Component {
	constructor( props ) {
		super( props );

		this.emitter = new EventEmitter();
		this.dispatch = this.dispatch.bind( this );
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	dispatch( ...args ) {
		return this.emitter.emit( ...args );
	}

	subscribe( events ) {
		Object.keys( events ).forEach( name => {
			const handler = events[ name ];
			this.emitter.on( name, handler.bind( this ) );
		} );
	}

	unsubscribe() {
		this.emitter.removeAllListeners();
	}
}
