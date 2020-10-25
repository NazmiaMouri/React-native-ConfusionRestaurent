import React, { Component } from 'react';
import { View, Text } from 'react-native'

 class Home extends Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
          </Drawer.Navigator>
           
        )
    }
}

export default Home
