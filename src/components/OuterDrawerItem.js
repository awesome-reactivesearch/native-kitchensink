import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const OuterDrawerItem = ({ label, onPress }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			paddingTop: 21,
			paddingBottom: 16,
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
			<Icon name="chevron-right" size={20} />
		</View>
	</TouchableOpacity>
);

export default OuterDrawerItem;
