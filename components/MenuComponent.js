import React, { Component } from 'react';
import { View, FlatList,Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import {DISHES} from '../shared/dishes'

class Menu extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
        dishes: DISHES,
        selectedDish:null
      };
  }
  
    

  
render(){

   const renderMenuItem = ({item, index}) => {

        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() =>navigate('Dish', { dishId: item.id })}
                    
                    leftAvatar={
                    
                        <Image source={require('./images/uthappizza.png')} style={{ width: 40, height: 40 }} />
                    }
                  />
        );
    };
    const { navigate } = this.props.navigation;
    return (
        <FlatList 
            data={this.state.dishes}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id.toString()}
            />
);

}
    
}


export default Menu;