/* global React */

export default class AmazonImage extends React.Component {
	render() {
		const { image, alt } = this.props;
		return <img
			src={ image.src }
			width={ image.width }
			height={ image.height }
			alt={ alt }
		/>;
	}
}
