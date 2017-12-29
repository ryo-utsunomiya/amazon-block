/* global React, $ */
import AmazonItems from './AmazonItems';

export default class AmazonSearch extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			keyword: '',
			items: [],
			data: {},
		};
	}

	handleKeywordChange( event ) {
		this.setState( { keyword: event.target.value } );
	}

	handleSearch() {
		const keyword = this.state.keyword;
		const url = '/wp-admin/admin-ajax.php?action=amazonjs_search&CountryCode=JP&SearchIndex=All&ItemPage=1&Keywords=' + keyword;
		$.get( url )
			.then( res => {
				const data = JSON.parse( res );
				this.setState( { data } );
			} );
	}

	render() {
		return (
			<div>
				<h2>Keyword Search</h2>
				<input
					type="text"
					name="keyword"
					placeholder="Input Keyword"
					value={ this.state.keyword }
					onChange={ this.handleKeywordChange.bind( this ) }
				/>
				<input type="submit" value="Search" onClick={ this.handleSearch.bind( this ) } />
				<AmazonItems data={ this.state.data } />
			</div>
		);
	}
}
