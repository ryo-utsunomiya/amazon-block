/* global React */

const style = {
	wrapper: {
		textAlign: 'center',
		padding: '10px',
	},
	pageNumber: {
		display: 'inline-block',
		padding: '0 20px',
	},
};

export default class SearchItemsPager extends React.Component {
	render( ) {
		const { itemsPerPage, startIndex, totalPages } = this.props.params;
		const start = ( ( startIndex - 1 ) * itemsPerPage ) + 1;
		const end = startIndex * itemsPerPage;
		return (
			<div style={ style.wrapper }>
				<button>Prev</button>
				<span style={ style.pageNumber }>
					{ start } - { end } / { totalPages }
				</span>
				<button>Next</button>
			</div>
		);
	}
}
