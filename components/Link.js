/* global React */

export default class Link extends React.Component {
	render() {
		const { href, title, content } = this.props;
		return (
			<a
				href={ href }
				target="_blank"
				rel="noopener noreferrer"
				title={ title }
			>
				{ content }
			</a>
		);
	}
}
