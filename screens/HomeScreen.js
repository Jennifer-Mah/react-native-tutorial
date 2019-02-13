import React from 'react';
import { StyleSheet,Text, View, Switch, Image, TextInput, ScrollView, 
  Button, TouchableOpacity, Picker, Slider, FlatList, SectionList, Platform} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';


import {createStackNavigator, createAppContainer} from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;