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
			<AmazonItemsPager params={ props.data.os } />
			}
			{ props.data.items &&
			<AmazonItemsList items={ props.data.items } />
			}
		</React.Fragment>
	);
};
