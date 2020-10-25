import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderBackButton } from '@react-navigation/stack';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetail';
import Home from './HomeScreen'
import {View, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


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
        <MenuNav.Screen name="Menu" component={Menu} 
        option= {({ navigation, route }) => ({
          headerLeft:
          // (props) => (
          //   <HeaderBackButton
          //     {...props}
          //     onPress={() => {
          //       // Do something
          //     }}
          //   />
          // ),
          <Button>Hello</Button>
      })
    }
    />
        <MenuNav.Screen name="Dish" component={Dishdetail} />
        <MenuNav.Screen name="Home" component={Home} />
      </MenuNav.Navigator>
    
    </NavigationContainer>
        
    );
  }
}
  
export default Main;