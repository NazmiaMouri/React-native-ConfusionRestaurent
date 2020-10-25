import React, { Component } from 'react';
import {Text,View , Image} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';



function RenderDish(props) {
    const dish=props.dish;
    if( dish !=null){
        return (
           <Card
           featuredTitle={dish.name}
        //    image={require('./images/uthappizza.png')}
           >
               <Text style={{ margin : 10}}>
                   {dish.description}
               </Text>
               <Card.Image
            style={{ justifyContent: "center", backgroundColor: "#fff" }}
          >
               <Image
              style={{ width: 100, height: 100, alignSelf: "center" }}
              resizeMode="contain"
              source={require('./images/uthappizza.png')}
            />
              </Card.Image>
           </Card>
        )

    }
    else{
        return(
            <View></View>
        )
    }
    
}



class Dishdetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dishes: DISHES,
            
          };
    }
    
    render (){
        const dishId = this.props.route.params.dishId;
        return (
           
            <RenderDish dish={this.state.dishes[+dishId]}/>
         )

    }

  
}

export default Dishdetail
