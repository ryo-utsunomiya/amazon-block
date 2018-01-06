/* global React */
import Image from './Image';
import Link from './Link';
import event from '../utils/EventBus';
import AmazonBlockVars from '../utils/AmazonBlockVars';

const { __ } = wp.i18n;
const { noimage } = AmazonBlockVars;

const style = {
	listItem: {
		listStyleType: 'none',
		borderBottom: 'solid 1px #eee',
		padding: '10px 0',
		display: 'flex',
		justifyContent: 'space-between',
	},
	productBox: {
		width: '80%',
		display: 'flex',
	},
	buttonBox: {
		width: '20%',
		display: 'flex',
		alignItems: 'flex-end',
	},
};

export default class SearchItemsList extends React.Component {
	constructor( props ) {
		super( props );
		this.handleClick = this.handleClick.bind( this );
	}

	handleClick( ev ) {
		const { index } = ev.target.dataset;
		const item = this.props.items[ index ];
		event.emit( 'SET_ITEM', item );
	}

	renderListItems() {
		return this.props.items.map( ( row, index ) => {
			const image = row.SmallImage || noimage.small;
			return (
				<li style={ style.listItem } key={ index }>
					<div style={ style.productBox }>
						<div>
							<Link href={ row.DetailPageURL } content={ <Image image={ image } alt={ row.Title } /> } />
						</div>
						<div>
							<Link href={ row.DetailPageURL } content={ row.Title } />
						</div>
					</div>
					<div style={ style.buttonBox }>
						<button
							type="button"
							onClick={ this.handleClick }
							data-index={ index }
						>
							{ __( 'Select' ) }
						</button>
					</div>
				</li>
			);
		} );
	}

	render() {
		if ( this.props.items.length === 0 ) {
			return null;
		}

		return (
			<ul>
				{ this.renderListItems() }
			</ul>
		);
	}
}
