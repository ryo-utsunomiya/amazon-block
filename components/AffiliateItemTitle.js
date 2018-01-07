/* global React */
import Link from './Link';

export default class AffiliateItemTitle extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				<Link
					href={ item.DetailPageURL }
					title={ item.Title }
					content={ item.Title }
				/>
			</div>
		);
	}
}
