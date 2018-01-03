/* global React */
import event from '../utils/EventBus';

const style = {
	listItem: {
		listStyleType: 'none',
	},
};

const buildAmazonJsShortCode = ( asin, title ) => {
	return `[amazonjs asin="${ asin }" locale="JP" title="${ title }"]`;
};

export default class ItemsList extends React.Component {
	constructor( props ) {
		super( props );
		this.handleClick = this.handleClick.bind( this );
	}

	handleClick( ev ) {
		const { index } = ev.target.dataset;
		const item = this.props.items[ index ];
		const shortcode = buildAmazonJsShortCode( item.ASIN, item.Title );
		event.emit( 'SET_SHORTCODE', shortcode );
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
						data-index={ index }
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
