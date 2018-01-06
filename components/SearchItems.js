/* eslint-disable react/jsx-no-undef */
/* global React */
import Pager from './SearchItemsPager';
import List from './SearchItemsList';

export default class SearchItems extends React.Component {
	render() {
		const { data } = this.props;

		if ( ! data ) {
			return null;
		}

		return (
			<div>
				{ data.os &&
				<Pager params={ data.os } />
				}
				{ data.items &&
				<List items={ data.items } />
				}
			</div>
		);
	}
}
