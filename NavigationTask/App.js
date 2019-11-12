import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from './src/Project1'
import FlatListt from './src/Project2'
import Project3 from './src/Project3'
import Project4 from './src/Project4'
import Project5 from './src/Project5'
import Project6 from './src/Project6'
import Project7 from './src/Project7'
import Project8 from './src/Project8'
import HomePage from './src/HomePage'
import rws from './src/rws3'
import SplashScreen from './AsyncData/SplashScreen'
import SignUp from './AsyncData/SignUp'
import DashBoard from './AsyncData/Dashboard'
import LogIn from './AsyncData/Login'
import NewDashBoard from './AsyncData/NewDashBoard'
import GoogleSignIn1 from './GoogleSignIn/GoogleSignIn'
// import firebase from 'firebase'
import LogUser from './GoogleSignIn/Logged'

class Mainclass extends Component {
  static navigationOptions = {
    title: 'Shop of Tasks',


  };
  render() {
    return (

      <View style={{ flex: 1, marginBottom: 10, backgroundColor: 'lightgrey', borderTopColor: 'black', borderTopWidth: 2 }}>
        <Text
          style={{ marginLeft: 30, paddingLeft: 80, marginTop: 20, width: 350, color: 'white', backgroundColor: 'black', fontSize: 40, fontWeight: 'bold' }}
        >
          Home Page
        </Text>

        <ScrollView>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center', marginTop: 50, backgroundColor: 'black',
              height: 50,
              width: 300, marginLeft: 65, borderRadius: 20, shadowColor: 'black',
              shadowOpacity: 0.5,
              shadowRadius: 10
            }}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text
              style={{ color: 'white', fontSize: 30 }}
            >
              Go to UITask
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('Flatlistprgrm')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to Flatlistprgrm
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('FlatListImage')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to FlatListImage
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('FlatlistData')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to FlatlistData
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('DiwaliTask')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to DiwaliTask
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('LifeCycle')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to LifeCycle
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('ImagePicker')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to ImagePicker
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('Newtask')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to task
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('TodayClass')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to Newtask
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('RWS')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to RWS
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('Splash')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to AsyncData
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.props.navigation.navigate('GoogleSignIn')}>
            <Text
              style={{ fontSize: 30, color: 'white' }}
            >
              Go to GoogleSignIn
          </Text>
          </TouchableOpacity>

        </ScrollView>


      </View>
    );
  }
}





const AppNavigator = createStackNavigator({
  Home: Mainclass,
  Details: DetailsScreen,
  Flatlistprgrm: FlatListt,
  FlatListImage: Project3,
  FlatlistData: Project4,
  DiwaliTask: Project5,
  LifeCycle: Project6,
  ImagePicker: Project7,
  Newtask: Project8,
  TodayClass: HomePage,
  RWS: rws,
  Splash: { screen: SplashScreen, navigationOptions: { header: null } },
  SignUp: SignUp,
  DashBoard: DashBoard,
  LogIn: LogIn,
  NewDashBoard: NewDashBoard,
  GoogleSignIn: GoogleSignIn1,
  GLogin: LogUser

},
  {
    initialRouteName: 'Home',
    headerBackTitleVisible: false,
    // headerMode:'none',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },

      headerRight: () => (
        <TouchableOpacity
          style={{ borderRadius: 10, height: 30, width: 90, marginRight: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
          onPress={() => alert('Hey Buddy!')}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            Button
          </Text>
        </TouchableOpacity>

      ),
      headerTintColor: 'white',



      headerTitleStyle: {

        fontWeight: 'bold',
        fontSize: 25,
      },
    },
  }
);

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 65,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10


  }
})