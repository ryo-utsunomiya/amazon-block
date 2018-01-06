/* global React */
import AmazonImage from './AmazonImage';

export default class AffiliateItem extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				<a
					href={ item.DetailPageURL }
					title={ item.Title }
					target="_blank"
					rel="noreferrer noopener"
				>
					<AmazonImage image={ this.getImage() } alt={ item.Title } />
				</a>
			</div>
		);
	}

	getImage() {
		const { size, item } = this.props;
		switch ( size ) {
			case 'large':
				return item.LargeImage;
			case 'small':
				return item.SmallImage;
			case 'medium':
			default:
				return item.MediumImage;
		}
	}
}
