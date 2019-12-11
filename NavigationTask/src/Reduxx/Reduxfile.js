import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../Reduxx/Reducer/index'
import Action from '../Reduxx/Action/action'

export default class Reduxfile extends Component {
  render() {
    return (
      <Provider store = {store} >
          <Action />
      </Provider>
    );
  }
}