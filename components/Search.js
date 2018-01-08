/* eslint-disable react/jsx-no-undef,jsx-a11y/no-onchange */
/* global React, $ */
import SearchItems from './SearchItems';
import AmazonBlockVars from '../utils/AmazonBlockVars';

const { __ } = wp.i18n;
const { defaultCountryCode, countries, searchIndexes } = AmazonBlockVars;
const defaultSearchIndex = 'All';

export default class AmazonSearch extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			keyword: '',
			countryCode: defaultCountryCode,
			searchIndex: defaultSearchIndex,
			data: {},
		};
		this.handleCountryCodeChange = this.handleCountryCodeChange.bind( this );
		this.handleSearchIndexChange = this.handleSearchIndexChange.bind( this );
		this.handleKeywordChange = this.handleKeywordChange.bind( this );
		this.handleSearch = this.handleSearch.bind( this );
	}

	handleCountryCodeChange( event ) {
		this.setState( {
			countryCode: event.target.value,
			searchIndex: defaultSearchIndex,
		} );
	}

	handleSearchIndexChange( event ) {
		this.setState( { searchIndex: event.target.value } );
	}

	handleKeywordChange( event ) {
		this.setState( { keyword: event.target.value } );
	}

	handleSearch() {
		$.get( this.getSearchApiUrl() )
			.done( res => {
				const data = JSON.parse( res );
				this.setState( { data } );
			} )
			.fail( err => {
				// eslint-disable-next-line no-console
				console.error( err );
			} );
	}

	getSearchApiUrl() {
		const { keyword, countryCode, searchIndex } = this.state;
		return `/wp-admin/admin-ajax.php?action=amazonjs_search&CountryCode=${ countryCode }&SearchIndex=${ searchIndex }&ItemPage=1&Keywords=${ keyword }`;
	}

	renderCountryOptions( state ) {
		return Object.keys( countries ).map( ( code ) => {
			const country = countries[ code ];
			return (
				<option key={ code } value={ code } selected={ code === state.countryCode }>
					{ country.label }
				</option>
			);
		} );
	}

	renderSearchIndexOptions( state ) {
		return Object.keys( searchIndexes ).map( ( index ) => {
			const searchIndex = searchIndexes[ index ];
			const isSearchable = searchIndex[ state.countryCode ];
			if ( isSearchable ) {
				return (
					<option key={ index } value={ index } selected={ index === state.searchIndex }>
						{ searchIndex.label }
					</option>
				);
			}
		} );
	}

	render() {
		const { event } = this.props;
		return (
			<div>
				<h2>{ __( 'Keyword Search' ) }</h2>
				<div>
					<select name="countryCode" onChange={ this.handleCountryCodeChange }>
						{ this.renderCountryOptions( this.state ) }
					</select>
					<select name="searchIndex" onChange={ this.handleSearchIndexChange }>
						{ this.renderSearchIndexOptions( this.state ) }
					</select>
				</div>
				<input
					type="text"
					name="keyword"
					placeholder={ __( 'Input Keyword' ) }
					value={ this.state.keyword }
					onChange={ this.handleKeywordChange }
					style={ { width: '80%' } }
				/>
				<input type="submit" value={ __( 'Search' ) } onClick={ this.handleSearch } />
				<p style={ { color: 'red' } }>{ this.state.data.error_message }</p>
				<SearchItems data={ this.state.data } event={ event } />
			</div>
		);
	}
}
