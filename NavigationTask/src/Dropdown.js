import React,{Component} from 'react'
import {Text,View} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
import Booger from './Booger'




export default class Dropdown extends Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ModalDropdown 
                 dropdownStyle={{width:200,height:300}} 
                //onSelect={()=>this.props.navigation.navigate('Booger')}
                options={['option 1', 'option 2',<Booger></Booger>]}>
                <Text>

                    efrerferfer
                </Text>
</ModalDropdown>
                
            </View>
        );
    }
}