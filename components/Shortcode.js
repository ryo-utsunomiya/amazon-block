/* global React, $ */

export default class Shortcode extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			html: '',
		};
	}

	componentDidMount() {
		const { shortcode } = this.props;

		if ( ! shortcode ) {
			return;
		}

		$.ajax( {
			url: wpApiSettings.root + 'amazon-block/v1/shortcode/' + encodeURIComponent( shortcode ),
			method: 'GET',
			beforeSend: ( xhr ) => {
				xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
			},
		} )
			.done( ( res ) => {
				this.setState( {
					html: res,
				} );
			} )
			.fail( ( err ) => {
				// eslint-disable-next-line no-console
				console.error( err );
			} );
	}

	createMarkup() {
		return { __html: this.state.html };
	}

	render() {
		return (
			<div dangerouslySetInnerHTML={ this.createMarkup() } />
		);
	}
}
