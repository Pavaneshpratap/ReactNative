import React,{useState} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

function HooksCounter4(){

    const [items,setItems] = useState([])

    const addItem = () => {
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*20)+1
        }])
    }

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity
            onPress={addItem}>
            <Text>
                Add a number
            </Text>
            </TouchableOpacity>
            {
                items.map(item=>(
                    <Text key={item.id}>
                        {item.value}

                    </Text>
                ))
            }
        </View>
    );
}

export default HooksCounter4