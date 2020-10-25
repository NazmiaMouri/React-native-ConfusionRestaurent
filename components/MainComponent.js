import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import Home from './HomeScreen'
import {View} from 'react-native';


class Main extends Component {
  constructor(props) {
    super(props);
    
  }
  onDishSelect(dishId){
      this.setState({selectedDish:dishId})
  }

  render() {
    const MenuNav = createStackNavigator();
    const Drawer = createDrawerNavigator();
 
    return (
      <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Menu" component={Menu} />
        <MenuNav.Screen name="Dish" component={Dishdetail} />
        <MenuNav.Screen name="Home" component={HomeScreen} />
      </MenuNav.Navigator>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
        
    );
  }
}
  
export default Main;