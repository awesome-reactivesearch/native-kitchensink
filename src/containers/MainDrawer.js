import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';
import DrawerItem from '../components/DrawerItem';
import ChildDrawer from './ChildDrawer';

import screenMapping from './../screenMapping';

const styles = StyleSheet.create({
	container: { flex: 1, paddingTop: StatusBar.currentHeight },
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 13, paddingTop: 0 },
	customDrawer: {},
	customDrawerTouch: { paddingLeft: 13, paddingBottom: 5 },
	customDrawerIcon: { paddingRight: 7 },
});

class MainDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainScreen: true,
			currentComponent: {},
		};
	}

	toggleMainScreen = () => {
		this.setState(prevState => ({ mainScreen: !prevState.mainScreen }));
	};

	renderOuterComponents = () =>
		this.props.items.map(item => (
			<DrawerItem
				key={item.key}
				label={item.key}
				onPress={() => {
					console.log('toggleMainScreen');
					this.toggleMainScreen();
					this.setState({ currentComponent: item });
				}}
			/>
		));

	navigateToCallback = route => {
		this.props.navigation.navigate(route);
	};

	getItemsFromProps = currentComponent => screenMapping[currentComponent.key];

	// TODO: Pass all non-behavioral props that were previously passed to DrawerItems
	render() {
		console.log('DrawerItems props: ', this.props);

		const { mainScreen, currentComponent } = this.state;

		if (mainScreen) {
			return this.renderOuterComponents();
		}

		const items = this.getItemsFromProps(currentComponent);

		return (
			<ChildDrawer
				goBack={this.toggleMainScreen}
				items={items}
				navigateToCallback={this.navigateToCallback}
				componentLabel={this.state.currentComponent.key}
			/>
		);
	}
}

export default MainDrawer;
