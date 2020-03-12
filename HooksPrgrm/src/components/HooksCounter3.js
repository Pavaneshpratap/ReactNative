import React,{useState} from 'react'
import {Text,View,TextInput} from 'react-native'

function HooksCounter3 () {

   const [name,setName] = useState({firstName:'',lastName:''})
    
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TextInput
            value={name.firstName}
            onChangeText={(val)=>setName({...name,firstName:val})}
            style={{height:40,width:100,borderWidth:1}}/>
            <TextInput
            value={name.lastName}
            onChangeText={(val)=>setName({...name,lastName:val})}
            style={{height:40,width:100,borderWidth:1}}/>
            <Text>
               Your FirstName is {name.firstName}
            </Text>
            <Text>
               Your LastName is {name.lastName}

            </Text>
        </View>
    );
}

export default HooksCounter3