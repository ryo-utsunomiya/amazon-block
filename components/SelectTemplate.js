/* global React */
import AffiliateItem from './AffiliateItem';
import { TEMPLATE_TYPE } from '../utils/constants';

const { __ } = wp.i18n;

const style = {
	label: {
		paddingRight: '10px',
	},
	buttonBox: {
		textAlign: 'center',
	},
	button: {
		margin: '0 10px',
	},
};

export default class AmazonBlock extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			template: TEMPLATE_TYPE.IMAGE_MEDIUM,
		};
		this.handleTemplateChange = this.handleTemplateChange.bind( this );
		this.handleCancelClick = this.handleCancelClick.bind( this );
		this.handleInsertClick = this.handleInsertClick.bind( this );
	}

	handleTemplateChange( ev ) {
		this.setState( {
			template: ev.target.value,
		} );
	}

	handleCancelClick() {
		const { event } = this.props;
		event.emit( 'SET_ITEM', null );
	}

	handleInsertClick() {
		const { event } = this.props;
		event.emit( 'SET_TEMPLATE', this.state.template );
	}

	render() {
		return (
			<div>
				<h4>{ __( 'Select template' ) }</h4>
				<div>
					<label htmlFor="template-type-title" style={ style.label }>
						<input
							type="radio"
							name="template"
							id="template-type-title"
							value={ TEMPLATE_TYPE.TITLE }
							onClick={ this.handleTemplateChange }
						/>
						{ __( 'Title' ) }
					</label>

					<label htmlFor="template-type-image-small" style={ style.label }>
						<input
							type="radio"
							name="template"
							id="template-type-image-small"
							value={ TEMPLATE_TYPE.IMAGE_SMALL }
							onClick={ this.handleTemplateChange }
						/>
						{ __( 'Small Image' ) }
					</label>

					<label htmlFor="template-type-image-medium" style={ style.label }>
						<input
							type="radio"
							name="template"
							id="template-type-image-medium"
							value={ TEMPLATE_TYPE.IMAGE_MEDIUM }
							onClick={ this.handleTemplateChange }
						/>
						{ __( 'Medium Image' ) }
					</label>

					<label htmlFor="template-type-image-large" style={ style.label }>
						<input
							type="radio"
							name="template"
							id="template-type-image-large"
							value={ TEMPLATE_TYPE.IMAGE_LARGE }
							onClick={ this.handleTemplateChange }
						/>
						{ __( 'Large Image' ) }
					</label>
				</div>
				<div>
					<h5>Preview</h5>
					<AffiliateItem item={ this.props.item } template={ this.state.template } />
				</div>
				<div style={ style.buttonBox }>
					<button
						type="button"
						onClick={ this.handleCancelClick }
						style={ style.button }
						className="button"
					>
						{ __( 'Cancel' ) }
					</button>
					<button
						type="button"
						onClick={ this.handleInsertClick }
						style={ style.button }
						className="button button-primary"
					>
						{ __( 'Insert' ) }
					</button>
				</div>
			</div>
		);
	}
}
