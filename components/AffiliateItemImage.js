/* global React */
import Image from './Image';
import Link from './Link';
import AmazonBlockVars from '../utils/AmazonBlockVars';

const { noimage } = AmazonBlockVars;

export default class AffiliateItem extends React.Component {
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

	render() {
		const { item } = this.props;
		return (
			<div>
				<Link
					href={ item.DetailPageURL }
					title={ item.Title }
					content={ <Image image={ this.getImage() } alt={ item.Title } /> }
				/>
			</div>
		);
	}
}
