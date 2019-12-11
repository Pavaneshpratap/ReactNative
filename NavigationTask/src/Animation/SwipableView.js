import React,{Component} from 'react'
import {Text,View,Dimensions,Image,Animated,PanResponder} from 'react-native'




const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WEIGHT = Dimensions.get('window').width

const GroupImages = [
    {id:'1',uri:"https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id:'2',uri:"https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id:'3',uri:"https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id:'4',uri:"https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id:'5',uri:"https://images.pexels.com/photos/3312678/pexels-photo-3312678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
]

export default class SwipableView extends Component {

    constructor(props){
        super(props)
        this.position = new Animated.ValueXY()
        this.state={
            currentIndex:0
        } 
        // this.renderArticles = this.renderArticles.bind(this);
    }

    componentWillMount(){
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder:(e,gestureState)=>true,
            onPanResponderMove:(evt,gestureState)=>{
                this.position.setValue({y:gestureState.dy})

            },
            onPanResponderRelease:(evt,gestureState)=>{

            }

            
        }) 
    }
    
    renderArticles=()=>{
        return GroupImages.map((item,i)=>{
            return(
                <Animated.View key={item.id} style={this.position.getLayout()}
                {...this.PanResponder.panHandlers}
                >
                <View key={item.id} style={{flex:1,position:"absolute",height:SCREEN_HEIGHT,width:SCREEN_WEIGHT,backgroundColor:'white'}}>
                    <View style={{flex:2}}>
                        <Image
                        style={{flex:1,resizeMode:'contain',backgroundColor:"black"}}
                        source={{uri:GroupImages[i].uri}}/>

                    </View>
                    <View style={{flex:3,padding:5}}>
                        <Text>
                        Ernst & Young Global Limited (EY), also known as Ernst & Young, is a multinational professional services firm headquartered in London, England, United Kingdom. EY is one of the largest professional services firms in the world.[5] Along with Deloitte, KPMG and PricewaterhouseCoopers (PwC), EY is considered one of the Big Four accounting firms. EY has recently shifted its historical business focus towards consulting. In particular, EY advanced its market presence in digital and strategic consulting and entered into direct competition with what has been a traditional field of "Big Three" companies, namely Bain, McKinsey and BCG.[6] By a series of acquisitions and shift of market focus, EY expanded its market share[7] in areas including operations services consulting, strategy services consulting, HR services consulting, financial services consulting and technology services consulting.[8]
EY operates as a network of member firms which are separate legal entities in individual countries. It has 270,000 employees in over 700 offices around 150 countries in the world.[4] It provides assurance (including financial audit), tax, consulting and advisory services to companies.[9]
The firm dates back to 1849 with the founding of Harding & Pullein in England. The current firm was formed by a merger of Ernst & Whinney and Arthur Young & Co. in 1989.[10] It was known as Ernst & Young until 2013 when it underwent a rebranding to EY. The initialism "EY" was already an informal name for the firm prior to its official adoption.[11]
In 2018, Fortune magazine ranked EY 52nd on the 100 Best Companies to Work For list.[12] In 2017, EY was the ninth-largest privately owned organization in the United States.[13]
                       </Text>
                    </View>
                </View>
                </Animated.View>
            )
        }).reverse()

    }




    render(){
        return(
            <View style={{flex:1}}>
                {this.renderArticles()}

            </View>
        );
    }
}