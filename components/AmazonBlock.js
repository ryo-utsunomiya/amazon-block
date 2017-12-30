/* global React */
import AmazonSearch from './AmazonSearch';

export default class AmazonBlockEdit extends React.Component {
	render() {
		if ( this.props.shortcode ) {
			return this.props.shortcode;
		}
		return <AmazonSearch dispatch={ this.props.dispatch } />;
	}
}
