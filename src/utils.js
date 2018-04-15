export const evaluateOuterDrawerListItems = items => {
	const drawerItems = {};
	items.forEach((item, index) => {
		let { key } = item;
		// Delimiter _
		// key => DataSearch_Basic to DataSearch
		key = key.substr(0, key.indexOf('_'));
		if (key.length) {
			if (drawerItems.hasOwnProperty(key)) {
				drawerItems[key].end = index + 1;
			} else {
				drawerItems[key] = {
					start: index,
					end: 0,
				};
			}
		}
	});
	return drawerItems;
};

export const evaluateChildDrawerTitle = ({ navigation }) => ({
	title: navigation.state.key.substr(navigation.state.key.indexOf('_') + 1),
});
