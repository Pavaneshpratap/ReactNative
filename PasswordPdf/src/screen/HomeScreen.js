import React,{Component} from 'react'
import {Text,View,TouchableOpacity,ActivityIndicator,Button,NativeModules} from 'react-native'
import { WebView } from 'react-native-webview';
// import RNHTMLtoPDF from "react-native-html-to-pdf";

export default class HomeScreen extends Component {

    // createPdf = async () => {
    //     console.warn("in");
        
    //     let options = {
    //       padding: 0,
    //       height: 842,
    //       width: 595,
    //       html:
    //         "<h1>" +
    //         "Testing pdf" +
    //         "</h1>" +
    //         "<h3 style='text-decoration: underline;'>Part 1<h3>"
    //       //new QRCode("part1").svg()
    //     };
    //     let file = await RNHTMLtoPDF.convert(options);
    //     console.warn({ file });
    //     // pdf passwod
    //     var PdfPassword = NativeModules.PdfPassword;
    //     PdfPassword.addEvent(file, "123456");
    // }    
    
    render(){
        
        const renderLoading = () => <ActivityIndicator style={{flex:2}} color="red" size="large"/>
        return(
                // <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                //     <TouchableOpacity
                //     onPress={this.createPdf}>
                //         <Text>
                //             passwodPdf
                //         </Text>
                //     </TouchableOpacity>
                <WebView 
                startInLoadingState={true}
                renderLoading={renderLoading}
                style={{marginTop:50}}
                source={{ uri: 'https://www.npmjs.com/package/@pravesh701/chatbubble' }} />
                // {/* </View> */}


        );

    }
}