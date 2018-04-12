import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NavigationActions, DrawerItems } from 'react-navigation';

import { getChildDrawerOptions } from '../utils';
// import DrawerItems from '../drawers/DrawerItems';
import ChildDrawer from './ChildDrawer';
import DrawerContainer from '../components/DrawerContainer';
import DrawerHeader from '../components/DrawerHeader';
import screenMapping from './../screenMapping';

class MainDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainDrawer: true,
			currentComponent: '',
		};
	}

	toggleMainDrawer = () =>
		this.setState(prevState => ({ mainDrawer: !prevState.mainDrawer }));

	_evaluateComponentsList = items => {
		let drawerItems = new Set();
		items.forEach(item => {
			let { key } = item;
			key = key.substr(0, key.indexOf('_'));
			if (key.length) drawerItems.add(key);
		});
		drawerItems = Array.from(drawerItems);
		return drawerItems;
	};

	renderMainDrawerComponents = mainDrawerItems =>
		mainDrawerItems.map(item => (
			<DrawerItem
				key={item}
				label={item}
				onPress={() => {
					this.toggleMainDrawer();
					this.setState({ currentComponent: item });
				}}
			/>
		));

	// Switches the rendering screen based on route key and mapping key
	navigateToCallback = routeName => {
		const { navigation } = this.props;
		const navigateAction = NavigationActions.navigate({
			routeName,
		});

		navigation.dispatch(navigateAction);
	};

	// TODO: Pass all non-behavioral props that were previously passed to DrawerItems
	// to have full support of navigation options and customizations
	render() {
		const { items, ...restProps } = this.props;
		console.log('items: ', restProps);
		const scopedItems = items.slice(0, 5);
		console.log('scopedItems: ', scopedItems);
		return (
			<ScrollView>
				<DrawerItems items={scopedItems} {...restProps} />
			</ScrollView>
		);

		// const { mainDrawer, currentComponent } = this.state;
		// let { items } = this.props;

		// items = this._evaluateComponentsList(items);

		// if (mainDrawer) {
		// 	return (
		// 		<DrawerContainer>
		// 			<DrawerHeader navigateToCallback={this.navigateToCallback} />
		// 			{this.renderMainDrawerComponents(items)}
		// 		</DrawerContainer>
		// 	);
		// }

		// const childDrawerItems = getChildDrawerOptions(
		// 	screenMapping,
		// 	currentComponent
		// );

		// return (
		// 	<ChildDrawer
		// 		componentKey={currentComponent}
		// 		items={childDrawerItems}
		// 		goBack={this.toggleMainDrawer}
		// 		navigateToCallback={this.navigateToCallback}
		// 	/>
		// );
	}
}

export default MainDrawer;
