/* global React */
import Search from './Search';
import AffiliateItem from './AffiliateItem';

export default class AmazonBlock extends React.Component {
	render() {
		if ( this.props.item ) {
			return <AffiliateItem item={ this.props.item } />;
		}
		return <Search dispatch={ this.props.dispatch } />;
	}
}
