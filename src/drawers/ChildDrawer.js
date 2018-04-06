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
import DrawerContainer from '../components/DrawerContainer';
import DrawerHeader from '../components/DrawerHeader';

const styles = StyleSheet.create({
	customDrawerTouch: {
		paddingLeft: 13,
		paddingBottom: 5,
		paddingTop: StatusBar.currentHeight + 5,
	},
	customDrawerIcon: { paddingRight: 10 },
});

class ChildDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderChildDrawerItems = childDrawerItems =>
		Object.keys(childDrawerItems).map(childDrawerKey => (
			<DrawerItem
				label={childDrawerKey.substr(childDrawerKey.indexOf('_') + 1)}
				key={childDrawerKey}
				onPress={() => {
					this.props.navigateToCallback(childDrawerKey);
				}}
				isChild
			/>
		));

	render() {
		const { items, componentKey } = this.props;
		return (
			<DrawerContainer>
				<DrawerHeader />
				<TouchableOpacity
					onPress={this.props.goBack}
					style={styles.customDrawerTouch}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingBottom: 17,
							paddingLeft: 3,
							borderBottomColor: '#F0F0F0',
							borderBottomWidth: 1,
						}}
					>
						<Icon
							name="ios-arrow-back"
							size={25}
							style={styles.customDrawerIcon}
							color="#666666"
						/>
						<Text style={{ color: '#666666' }}>Back to {componentKey}</Text>
					</View>
				</TouchableOpacity>
				<View style={{ paddingLeft: 10 }}>
					{this.renderChildDrawerItems(items)}
				</View>
			</DrawerContainer>
		);
	}
}

export default ChildDrawer;
