import AmazonBlockEdit from '../components/AmazonBlockEdit';

export default {
	name: 'amazon-block/amazon-block',
	title: 'Amazon',
	icon: 'universal-access-alt',
	category: 'common',
	edit: () => {
		return <AmazonBlockEdit />;
	},
	save: () => <h1>Saved content</h1>,
};
