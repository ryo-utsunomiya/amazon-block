/* global React */

export default class AmazonImage extends React.Component {
	render() {
		const { image, alt } = this.props;
		return <img
			src={ image.src }
			alt={ alt }
			height={ image.width }
			width={ image.height }
		/>;
	}
}
