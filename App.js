import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

class HomeScreen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen 1</Text>
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen 2</Text>
      </View>
    );
  }
}

// const ComponentsStack = StackNavigator({
//   Home: {
//     screen: HomeScreen1,
//   },
//   Notifications: {
//     screen: HomeScreen1,
//   },
// });

// const ComponentsStack2 = StackNavigator({
//   Home: {
//     screen: HomeScreen2,
//   },
//   Notifications: {
//     screen: HomeScreen2,
//   },
// });

// Drawer for Component1 containing one screen/component for each option
const ComponentsDrawer1 = DrawerNavigator({
  C1_Option1: {
    screen: HomeScreen1,
  },
  C1_Option2: {
    screen: HomeScreen1,
  },
});

// Drawer for Component2 containing one screen/component for each option
const ComponentsDrawer2 = DrawerNavigator({
  C2_Option1: {
    screen: HomeScreen2,
  },
  C2_Option2: {
    screen: HomeScreen2,
  },
});

// Root Drawer containing drawers for each components
const RootDrawer = DrawerNavigator({
  Components1: {
    screen: ComponentsDrawer1,
  },
  Components2: {
    screen: ComponentsDrawer2,
  },
});

export default class App extends React.Component {
  render() {
    return <RootDrawer />;
  }
}
