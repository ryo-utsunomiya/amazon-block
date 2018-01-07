/* global React */
import AffiliateItemTitle from './AffiliateItemTitle';
import AffiliateItemImage from './AffiliateItemImage';
import { TEMPLATE_TYPE } from '../utils/constants';

export default class AffiliateItem extends React.Component {
	getImageSize( template ) {
		switch ( template ) {
			case TEMPLATE_TYPE.IMAGE_SMALL:
				return 'small';
			case TEMPLATE_TYPE.IMAGE_LARGE:
				return 'large';
			case TEMPLATE_TYPE.IMAGE_MEDIUM:
			default:
				return 'medium';
		}
	}

	render() {
		const { item, template } = this.props;

		if ( template === TEMPLATE_TYPE.TITLE ) {
			return <AffiliateItemTitle item={ item } />;
		}

		return (
			<AffiliateItemImage
				item={ item }
				size={ this.getImageSize( template ) }
			/>
		);
	}
}
