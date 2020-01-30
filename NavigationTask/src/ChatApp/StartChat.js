import React,{Component} from 'react'
import {Text,View,Image} from 'react-native'
import {GiftedChat,Bubble,InputToolbar,Composer} from 'react-native-gifted-chat'
import Fire from './Fire'
import {vh,vw} from '../Constants/Dimension'


export default class StartChat extends Component {

  customComposer=(props)=>{
    return(
      <Composer
      {...props}
      placeholder="Message"
      // placeholderTextColor="yellow"
      composerHeight={vh(36)}
      textInputStyle={{fontSize:vh(15),backgroundColor:"#EBEFF5",marginRight:40,borderRadius:vh(20),paddingTop:vh(10),paddingLeft:vw(10)}}
      />
    )

  }

    customBubble=(props)=>{
        return(
            <Bubble
        {...props}
            wrapperStyle={{
                
                // left:{fontSize:90,backgroundColor:"red"},
                // right:{fontSize:145,backgroundColor:"grey"},
                
            }}
    
        />
        );
    }

    customInputToolbar=(props)=>{
        return(
            <InputToolbar
            {...props}
            containerStyle={{
                // height:vh(112)

                
            }}
            />
        );

    }

    senderBtn=()=>{
      return(
        <View style={{marginRight:vh(16),marginTop:vh(10)}}>
          <Image
          style={{height:vh(40),width:vh(40)}}
          source={require('../../assets/myiconsV102413.png')}/>
        </View>
      );
    }

    




    state = {
        messages: [],
    };
    get user() {
        return {
          name: this.props.navigation.getParam('Email'),
          _id: FireSDK.uid,
          avatar: "https://images.pexels.com/photos/3596695/pexels-photo-3596695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        };
    }
    render() {
        return (
          <GiftedChat
          // renderSend={this.senderBtn}
          renderComposer={this.customComposer}
          renderInputToolbar={this.customInputToolbar}
          isTyping={true}
          renderBubble={this.customBubble}
          renderAvatarOnTop={true}
            showAvatarForEveryMessage={false}
            messages={this.state.messages}
            onSend={FireSDK.send}
            user={this.user}
           
          />
        );
      }
      
      
      
    
      componentDidMount() {
        FireSDK.on(message =>
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
        );
      }
      componentWillUnmount() {
        FireSDK.off();
      }
    }