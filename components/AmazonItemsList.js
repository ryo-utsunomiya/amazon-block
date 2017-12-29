const style = {
	listItem: {
		listStyleType: 'none',
	},
};

const buildAmazonJsShortCode = ( asin, title ) => {
	return `[amazonjs asin="${ asin }" locale="JP" title="${ title }"]`;
};

const handleClick = ( ev ) => {
	console.log( 'handleClick' );
	const { asin, title } = ev.target.dataset;
	const sc = buildAmazonJsShortCode( asin, title );
	window.amazonjsShortCode = sc;
	console.log(window.amazonjsShortCode);
};

export default ( props ) => {
	if ( props.items.length === 0 ) {
		return null;
	}

	const listItems = props.items.map( ( row, index ) => {
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
					onClick={ handleClick }
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
};
