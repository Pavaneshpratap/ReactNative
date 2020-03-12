import React,{Component} from 'react'
import {Text,View,TouchableOpacity,Image} from 'react-native'
import {connect} from 'react-redux'
import * as actionCreater from './action/action'

class ReduxTest extends Component {

    // state={
    //     age:21
    // }
    // ageUp=()=>{
    //     this.setState({age:this.state.age+1})
    // }
    // ageDown=()=>{
    //     this.setState({age:this.state.age-1})
    // }

    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>
                   Age {this.props.age}
                </Text>
                {/* <Text>
                    History
                </Text>
                
                <View>
                    {
                        this.props.history.map(el=>(
                           <TouchableOpacity key={el.id} onPress={()=>this.props.onDelete(el.id)}>
                             <Text style={{fontSize:20}}>
                                 {el.age}
                             </Text>
                             </TouchableOpacity>
                        ))
                    }
                </View> */}
                <TouchableOpacity onPress={this.props.onAgeUp} >
                    <Text>
                        Age Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onAgeDown}>
                    <Text>
                        Age Down
                    </Text>
                </TouchableOpacity>
                {this.props.loading && <Image style={{height:40,width:40}} source={{uri:"https://faviconer.net/img/ajax-loader-preview.png"}}/>}
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAgeUp : () => dispatch(actionCreater.ageUP(1)),
        onAgeDown : () => dispatch(actionCreater.ageDOWN(1)),
        onDelete: (id) => dispatch({type:"DEL_ITEM",key:id})
    }
}

const mapstateToProps = (state) => {
    return{
        age:state.age,
        history:state.history,
        loading:state.loading
}
}

export default connect(mapstateToProps,mapDispatchToProps)(ReduxTest)