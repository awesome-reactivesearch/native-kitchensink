import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { padding: 13, paddingTop: 0 },
  customDrawer: { paddingTop: StatusBar.currentHeight },
  customDrawerTouch: { paddingLeft: 13, paddingBottom: 5 },
  customDrawerIcon: { paddingRight: 7 },
})

class HomeScreen1 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLockMode: 'locked-closed'
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DrawerToggle');
          }}>
            <Icon name="md-menu" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <Text>Home Screen 1</Text>
        </View>
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLockMode: 'locked-closed'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <View style={styles.innerContainer}>
          <Text>Home Screen 2</Text>
        </View>
      </View>
    );
  }
}

// const ComponentsStack1 = StackNavigator({
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

const CustomDrawerContentComponent = (props) => (
  <View style={styles.customDrawer}>
    <TouchableOpacity onPress={() => {
      // TODO: find a way to toggle off inner drawer and toggle in outer drawer
      props.navigation.navigate('DrawerToggle');

      // navigate to Components1 main screen
      // props.navigation.navigate('Components1');
    }} style={styles.customDrawerTouch}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="ios-arrow-back" size={25} style={styles.customDrawerIcon} />
        <Text>Back to Component1</Text>
      </View>
    </TouchableOpacity>
    <DrawerItems {...props} />
  </View>
);

// Drawer for Component1 containing one screen/component for each option
const ComponentsDrawer1 = DrawerNavigator({
  C1_Option1: {
    screen: HomeScreen1,
  },
  C1_Option2: {
    screen: HomeScreen1,
  },
}, {
  contentComponent: CustomDrawerContentComponent
});

// Drawer for Component2 containing one screen/component for each option
const ComponentsDrawer2 = DrawerNavigator({
  C2_Option1: {
    screen: HomeScreen2,
  },
  C2_Option2: {
    screen: HomeScreen2,
  },
}, {
  contentComponent: CustomDrawerContentComponent
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
