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

const styles = StyleSheet.create({
	container: { flex: 1, paddingTop: StatusBar.currentHeight },
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 13, paddingTop: 0 },
	customDrawer: {},
	customDrawerTouch: {
		paddingLeft: 13,
		paddingBottom: 5,
		paddingTop: StatusBar.currentHeight + 5,
	},
	customDrawerIcon: { paddingRight: 7 },
});

class ChildDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	navigateTo = () => {
		this.props.navigation.navigate('');
	};

	renderChildDrawerItems = items =>
		Object.keys(items).map(childDrawerLabel => (
			<DrawerItem
				key={childDrawerLabel}
				label={childDrawerLabel}
				onPress={() => {
					this.props.navigateToCallback(childDrawerLabel);
				}}
			/>
		));

	render() {
		const { items } = this.props;
		return (
			<View style={styles.customDrawer}>
				<TouchableOpacity
					onPress={this.props.goBack}
					style={styles.customDrawerTouch}
				>
					<View style={{ flexDirection: 'row' }}>
						<Icon name="ios-arrow-back" size={25} style={styles.customDrawerIcon} />
						<Text>Back to {this.props.componentLabel}</Text>
					</View>
				</TouchableOpacity>
				{this.renderChildDrawerItems(items)}
			</View>
		);
	}
}

export default ChildDrawer;
