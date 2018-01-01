/* global React */

export default class AffiliateItem extends React.Component {
	render() {
		return (
			<div className="amazonjs_item amazonjs_music">
				<div className="amazonjs_image">
					<a
						href={ this.props.item.DetailPageUrl }
						className="amazonjs_link"
						data-role="amazonjs_product"
						data-asin={ this.props.item.ASIN }
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							src={ this.props.item.MediumImage.src }
							width={ this.props.item.MediumImage.width }
							height={ this.props.item.MediumImage.height }
							alt={ this.props.item.Title }
						/>
					</a>
				</div>
			</div>
		);
	}
}
