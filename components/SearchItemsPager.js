export default ( props ) => {
	const { itemsPerPage, startIndex, totalPages } = props.params;
	const start = ( ( startIndex - 1 ) * itemsPerPage ) + 1;
	const end = startIndex * itemsPerPage;
	return (
		<div>
			<button>Prev</button>
			{ start } - { end } / { totalPages }
			<button>Next</button>
		</div>
	);
};
