import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

import { evaluateOuterDrawerListItems } from '../utils';
import OuterDrawerItem from '../components/OuterDrawerItem';
import DrawerHeader from '../components/DrawerHeader';

const styles = StyleSheet.create({
	customDrawerTouch: {
		paddingLeft: 13,
		paddingTop: 15,
	},
	customDrawerIcon: { paddingRight: 10 },
	backButtonRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 17,
		paddingLeft: 3,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 1,
	},
});

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

	renderMainDrawerComponents = mainDrawerItems =>
		Object.keys(mainDrawerItems).map(item => (
			<OuterDrawerItem
				key={item}
				label={item}
				onPress={() => {
					this.setState({
						currentComponent: item,
						mainDrawer: false,
					});
				}}
			/>
		));

	navigateToCallback = routeName => {
		this.setState({ mainDrawer: true });
		this.props.navigation.navigate(routeName);
	};

	render() {
		const { items, ...restProps } = this.props;
		const { mainDrawer, currentComponent } = this.state;

		// get items objects with unique items and indexes
		const scopedItemsObject = evaluateOuterDrawerListItems(items);

		if (mainDrawer) {
			return (
				<ScrollView>
					<DrawerHeader navigateToCallback={this.navigateToCallback} />
					{this.renderMainDrawerComponents(scopedItemsObject)}
				</ScrollView>
			);
		}

		const index = scopedItemsObject[currentComponent];

		const scopedItemsArr = items.slice(index.start, index.end);

		return (
			<ScrollView>
				<DrawerHeader navigateToCallback={this.navigateToCallback} />
				<TouchableOpacity
					onPress={this.toggleMainDrawer}
					style={styles.customDrawerTouch}
				>
					<View style={styles.backButtonRow}>
						<Icon
							name="ios-arrow-back"
							size={25}
							style={styles.customDrawerIcon}
							color="#666666"
						/>
						<Text style={{ color: '#666666' }}>Back to Components</Text>
					</View>
				</TouchableOpacity>
				<DrawerItems items={scopedItemsArr} {...restProps} />
			</ScrollView>
		);
	}
}

export default MainDrawer;
