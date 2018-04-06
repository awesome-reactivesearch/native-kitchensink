import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

const LOGO_URL =
	'https://opensource.appbase.io/reactivesearch/images/native/logo.png';

const DrawerHeader = () => (
	<View
		style={{
			flexDirection: 'row',
			backgroundColor: '#42a5f5',
			paddingVertical: 30,
			paddingLeft: 15,
			paddingTop: StatusBar.currentHeight + 17,
		}}
	>
		<Image
			source={{
				uri: LOGO_URL,
				width: 20,
			}}
		/>
		<Text style={{ color: '#FFF', paddingLeft: 7, fontSize: 15 }}>
			ReactiveSearch
		</Text>
	</View>
);

export default DrawerHeader;