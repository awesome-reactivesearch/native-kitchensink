import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const DrawerItem = ({ label, onPress, isChild }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			paddingVertical: 20,
			paddingLeft: 15,
			paddingRight: 10,
		}}
	>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<Text>{label}</Text>
			{!isChild && <Icon name="chevron-right" size={20} />}
		</View>
	</TouchableOpacity>
);

export default DrawerItem;
