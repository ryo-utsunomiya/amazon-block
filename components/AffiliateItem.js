/* global wp, React */

const date = wp.date.date;

const style = {
	amazonjs_info: {
		marginLeft: '170px',
	},
};

export default class AffiliateItem extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div className="amazonjs_item amazonjs_music">
				<div className="amazonjs_image">
					<a
						href={ item.DetailPageUrl }
						className="amazonjs_link"
						data-role="amazonjs_product"
						data-asin={ item.ASIN }
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							src={ item.MediumImage.src }
							width={ item.MediumImage.width }
							height={ item.MediumImage.height }
							alt={ item.Title }
						/>
					</a>
				</div>
				<div className="amazonjs_info" style={ style.amazonjs_info }>
					<h4>
						<a
							href={ item.DetailPageUrl }
							className="amazonjs_link"
							data-role="amazonjs_product"
							data-asin={ item.ASIN }
							target="_blank"
							rel="noreferrer noopener"
						>
							{ item.Title }
						</a>
					</h4>
					<ul>
						<li>{ item.Artist }</li>
						<li>{ item.Label }</li>
						<li className="amazonjs_price">
							<b>Price</b>
							{ item.OfferSummary.LowestNewPrice.FormattedPrice }
							<span>(at { date( 'Y/m/d h:i' ) })</span>
						</li>
						<li>
							<b>Release Date</b>
							{ date( 'Y/m/d', item.ReleaseDate ) }
						</li>
						<li>
							<b>Sales Rank</b>
							{ Number( item.SalesRank ).toLocaleString() }
						</li>
					</ul>
				</div>
				<div className="amazonjs_footer" />
			</div>
		);
	}
}
