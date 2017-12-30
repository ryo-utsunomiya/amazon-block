/* eslint-disable react/jsx-no-undef */
/* global React */
import AmazonItemsPager from './AmazonItemsPager';
import AmazonItemsList from './AmazonItemsList';

export default props => {
	if ( ! props.data ) {
		return null;
	}

	return (
		<React.Fragment>
			{ props.data.os &&
			<AmazonItemsPager dispatch={ props.dispatch } params={ props.data.os } />
			}
			{ props.data.items &&
			<AmazonItemsList dispatch={ props.dispatch } items={ props.data.items } />
			}
		</React.Fragment>
	);
};
