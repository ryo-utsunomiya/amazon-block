/* eslint-disable react/jsx-no-undef */
/* global React */
import Pager from './SearchItemsPager';
import List from './SearchItemsList';

export default class SearchItems extends React.Component {
	render() {
		if ( ! this.props.data ) {
			return null;
		}

		return (
			<React.Fragment>
				{ this.props.data.os &&
				<Pager params={ this.props.data.os } />
				}
				{ this.props.data.items &&
				<List items={ this.props.data.items } />
				}
			</React.Fragment>
		);
	}
}
