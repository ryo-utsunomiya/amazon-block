/* global React */

export default class Link extends React.Component {
	render() {
		const { href, content } = this.props;
		return (
			<a
				href={ href }
				target="_blank"
				rel="noopener noreferrer"
			>
				{ content }
			</a>
		);
	}
}
