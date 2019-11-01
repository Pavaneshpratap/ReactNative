import React, {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';



const Category=(props)=>{
return(

  <View>
  <Text>
    Category Name : {props.name}
    </Text>
    </View> 
);


}

export default class Demo extends Component {

    static navigationOptions = {
        title: 'LifeCycle',
      };

// sbse phle constuctor cll hota h.. used for initialization and binde event handler
  
constructor(props){

  // agr super ni lgaoge to 'this' keyword undefined btaaega

  super(props);
  this.state={
    qty:0
  }
  }

  



// qty ko increment krne k lie
 
  updateqty=()=>{
    this.setState((state) => ({
      qty:state.qty+1
    }))


  }

  // component k render hone k just baad cll hoga,, agr api wagera use krni ho{server se data lana ho}

  componentDidMount() {
    console.warn('Execute after component render');
  }


  // jb component ki value update hogi tb cll hoga 
  componentDidUpdate(prevProps,prevState){

    console.warn('Component Updated');

  }









  



  render(){
    return (
      <View style={{flex:1,marginTop:80,justifyContent:'center',alignItems:'center'}}>
        <Text>
            counter {this.state.qty}
        </Text>
        
        <TouchableOpacity onPress={this.updateqty}>
          <Text>
            Button
          </Text>
        </TouchableOpacity>
        <Category name="G.One"/>
      </View>

    );
  }

}