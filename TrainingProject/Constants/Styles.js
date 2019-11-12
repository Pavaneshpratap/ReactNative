import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    text:{
      fontSize:17,
      color:'white',
      marginTop:70,
      fontWeight:'bold',
      marginLeft:10
    },
    ImageContainer:{
      marginTop:65,
       marginBottom:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:40,
      borderWidth:2,
      borderColor:'white',
      marginLeft:15,
      height:60,
      width:60,
      backgroundColor:'#00886f'
    },
    TopView:{
      flex:1,
      backgroundColor:'#00886f'
  
    },
    Img:{
      height:50,
      width:50,
      borderRadius:25,
  
    },
      cloud:{
        height:73,
        width:150,
        marginTop:-65,
        marginLeft:225,
        position:'absolute'
      },
      btn:{
        marginTop:15,
        marginLeft:70,
        width:130,
        height:35,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00886f'
  
      },
      redtext:{
        marginLeft:20,
        marginTop:20,
        color:'#c3978a'
      },
      Addimg:{
        height:60,
        width:60,
        borderRadius:30
  
      },
      secondui:{
        flex:5,
        backgroundColor:'#fef7f4',
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:10,
        borderRadius:20,
        marginTop:8
      },
      groupImage:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:20,
        justifyContent:'space-between',
        marginRight:20
      },
      Relative:{
        fontSize:18,
        marginTop:30,
        marginLeft:20
      }
      
  
    
  })

  export default styles