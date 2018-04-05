import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import DrawerItem from '../components/DrawerItem';

class ChildDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderChildDrawerItems = childDrawerItems =>
		Object.keys(childDrawerItems).map(childDrawerKey => (
			<DrawerItem
				label={childDrawerKey}
				key={childDrawerKey}
				onPress={() => {
					this.props.navigateToCallback(childDrawerKey);
				}}
			/>
		));

	render() {
		const { items, componentKey } = this.props;
		return (
			<View style={styles.customDrawer}>
				<TouchableOpacity
					onPress={this.props.goBack}
					style={styles.customDrawerTouch}
				>
					<View style={{ flexDirection: 'row' }}>
						<Icon name="ios-arrow-back" size={25} style={styles.customDrawerIcon} />
						<Text>Back to {componentKey}</Text>
					</View>
				</TouchableOpacity>
				{this.renderChildDrawerItems(items)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	customDrawerTouch: {
		paddingLeft: 13,
		paddingBottom: 5,
		paddingTop: StatusBar.currentHeight + 5,
	},
	customDrawerIcon: { paddingRight: 10 },
});

export default ChildDrawer;
