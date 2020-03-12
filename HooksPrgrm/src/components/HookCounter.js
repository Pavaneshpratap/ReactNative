import React,{useState} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

function HookCounter() {

    const [Count,setCount] = useState(0)

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity
            onPress={()=>setCount(Count+1)}>
            <Text>
                Count : {Count}
            </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HookCounter