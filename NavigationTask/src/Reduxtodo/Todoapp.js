import React, {Component} from 'react';
import {Text,View} from 'react-native';
import AddTodo from './Container/AddTodo'
import VisibleTodos from './Container/VisibleTodos'

export default class Todoapp extends Component {

    state={
        todos:[],
        visibilityFilter:'SHOW_ALL_TODOS'
    }


    render(){
        return(
            <View style={{flex:1}}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}