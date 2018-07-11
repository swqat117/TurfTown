 import React, { Component } from 'react'
import {StyleSheet,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

 class Settings extends Component {

    _onPressButton = (event) => {
      
    };
    


  render() {
    return (
        <TouchableHighlight onPress={this._onPressButton}>
         <Icon name="ios-settings" color='#6d6d6d' size={26} style={{marginEnd:14}}/>
            
        </TouchableHighlight>
    )
  }
}

export default Settings;
