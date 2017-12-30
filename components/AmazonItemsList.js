/* global React */

const style = {
	listItem: {
		listStyleType: 'none',
	},
};

const buildAmazonJsShortCode = ( asin, title ) => {
	return `[amazonjs asin="${ asin }" locale="JP" title="${ title }"]`;
};

export default class AmazonItemsList extends React.Component {
	constructor( props ) {
		super( props );
		this.handleClick = this.handleClick.bind( this );
	}

	handleClick( ev ) {
		const { asin, title } = ev.target.dataset;
		const sc = buildAmazonJsShortCode( asin, title );
		this.props.dispatch( 'shortcode', sc );
	}

	render() {
		if ( this.props.items.length === 0 ) {
			return null;
		}

		const listItems = this.props.items.map( ( row, index ) => {
			const image = row.MediumImage;
			return (
				<li style={ style.listItem } key={ index }>
					<a
						href={ row.DetailPageURL }
						target="_blank"
						rel="noopener noreferrer"
					>
						{ image &&
						<img
							src={ image.src }
							height={ image.height / 2 }
							width={ image.width / 2 }
							alt={ row.Title }
						/>
						}
						{ row.Title }
					</a>
					<button
						type="button"
						onClick={ this.handleClick }
						data-asin={ row.ASIN }
						data-title={ row.Title }
					>
						Select
					</button>
				</li>
			);
		} );

		return (
			<ul>
				{ listItems }
			</ul>
		);
	}
}
