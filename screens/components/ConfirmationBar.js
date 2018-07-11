import React, { Component } from 'react';
import { StyleSheet,View,TouchableHighlight,Text,Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';
export class ConfirmationBar extends Component {


constructor(props) {
  super(props)

  
}
convertUnicode(input) {
    return input.replace(/\\u(\w{4,4})/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode);
    });
  }

    handleClick(){
        console.log('pass button bar')
        this.props.onItemClick();
    };
  
    render() {
    return (
    <View style={s.container} >    
        {/* <TouchableHighlight style={styles.button}>
         <Text style={styles.text}>+ 30</Text>
         </TouchableHighlight> */}

          <TouchableHighlight style={s.button} onPress={this.props.onItemClick}>
          <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
          <Text style={s.text1}  >Pay  {this.convertUnicode('\u20b9')} {this.props.price}</Text>
          <Icon name='ios-arrow-round-forward' color='#fff' size={30} style={{marginLeft:10 ,paddingBottom:4,}}/>
          </View>
         </TouchableHighlight>
    </View>    
    )
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
    
    marginLeft: 8,
},
text1:{
    textAlign:'center',
    color:'#fff',
    fontSize:14,
    fontWeight: '700',
    paddingBottom: 10,
    paddingTop: 5,
    
    
},
button:{
 
      width: '100%', 
      height: 48, 
      backgroundColor: '#0D47A1AA', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },


});

export default ConfirmationBar;
