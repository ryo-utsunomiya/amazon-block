/* global React */

export default class Image extends React.Component {
	render() {
		const { image, alt } = this.props;
		const style = {
			minWidth: image.width,
			minHeight: image.height,
		};
		return <img
			src={ image.src }
			width={ image.width }
			height={ image.height }
			alt={ alt }
			style={ style }
		/>;
	}
}
