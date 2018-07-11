import React, { Component } from 'react';
import { StyleSheet,View,TouchableHighlight,Text,Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';
export class ButtonBar extends Component {

constructor(props) {
  super(props)
  
}

    handleClick(){
        console.log('pass button bar')
        this.props.onItemClick();
    };
  
    render() {
        if(this.props.initialState){
            return(
            <View style={s.container} >    
              <TouchableHighlight style={[s.button,{backgroundColor:`${this.props.color}`}]} onPress={this.props.onItemClick}>
              <View style={{flex:1,flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
              <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
              <Icon name="md-stopwatch" color='#fff' size={20} style={{paddingHorizontal:2 ,paddingBottom:5,}}/>
              <Text style={s.text} >PICK A TIME SLOT </Text>
              </View>
              </View>
             </TouchableHighlight>
            </View> );   
        }else{
    return (
    <View style={s.container} >    
        {/* <TouchableHighlight style={styles.button}>
         <Text style={styles.text}>+ 30</Text>
         </TouchableHighlight> */}
          <TouchableHighlight style={[s.button,{backgroundColor:`${this.props.color}`}]} onPress={this.props.onItemClick}>
          <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
          <Icon name="md-stopwatch" color='#fff' size={22} style={{marginLeft:16 ,paddingBottom:5,}}/>
          <Text style={s.text}> {this.props.timing1} {this.props.am} | {this.props.currency} {this.props.total}  </Text>
          <Text style={s.text1}  >CONFIRM</Text>
          </View>
         </TouchableHighlight>
    </View>    
    )
}
  }
};


const s = StyleSheet.create({

container:{
    height:48,
    backgroundColor:'grey',
    flexDirection: 'column',
    
    marginTop: 0,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0

},
text:{
    textAlign:'center',
    paddingLeft: 2,
    color:'#fff',
    fontSize:13,
    fontWeight: '700',
    paddingBottom: 10,
    paddingTop: 5,
    
},
text1:{
    textAlign:'right',
    position:'absolute',
    bottom:8,
    right:16,
    color:'#fff',
    fontSize:14,
    fontWeight: '700',
    paddingBottom: 10,
    paddingTop: 5,
    
    
},
button:{
 
      width: '100%', 
      height: 48, 
      justifyContent: 'center', 
      
      position: 'absolute',
      bottom: 0
    },


});

export default ButtonBar;
