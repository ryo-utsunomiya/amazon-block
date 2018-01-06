/* global React */
import Image from './Image';
import AmazonBlockVars from '../utils/AmazonBlockVars';

const { noimage } = AmazonBlockVars;

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
					<Image image={ this.getImage() } alt={ item.Title } />
				</a>
			</div>
		);
	}

	getImage() {
		const { size, item } = this.props;
		switch ( size ) {
			case 'large':
				return item.LargeImage || noimage.large;
			case 'small':
				return item.SmallImage || noimage.small;
			case 'medium':
			default:
				return item.MediumImage || noimage.medium;
		}
	}
}
