/* global React */
import AmazonSearch from './AmazonSearch';

export default class AmazonBlockEdit extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			shortcode: '',
		};
	}

	setShortCode( shortcode ) {
		this.setState( { shortcode } );
	}

	render() {
		if ( this.state.shortcode ) {
			return this.state.shortcode;
		}
		return <AmazonSearch />;
	}
}
