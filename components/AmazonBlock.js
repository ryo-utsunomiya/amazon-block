/* global React */
import Search from './Search';
import Shortcode from './Shortcode';
import event from '../utils/EventBus';

export default class AmazonBlock extends React.Component {
	componentDidMount() {
		event.on( 'SET_SHORTCODE', ( shortcode ) => {
			this.props.setAttributes( { shortcode } );
		} );
	}

	render() {
		const { shortcode } = this.props.attributes;
		if ( shortcode ) {
			return <Shortcode shortcode={ shortcode } />;
		}
		return <Search />;
	}
}
