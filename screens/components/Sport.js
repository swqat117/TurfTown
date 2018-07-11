import React, { Component } from 'react';
import { Image } from 'react-native'
import DropdownMenu from './DropDownMenu';


var data = [["FOOTBALL ", "CRICKET", "BADMINTON", "ULTIMATE"]];


export default class Sport extends Component {
    render() {
      return (
       
        <DropdownMenu
        style={{flex: 1,marginTop: 10, marginLeft:2 ,}}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
        // arrowImg={}      
        // checkImage={}   
        // optionTextStyle={{color: '#333333'}}
        // titleStyle={{color: '#333333'}} 
        // maxHeight={300} 
        handler={(selection, row) => this.setState({text: data[selection][row]})}
        data={data}
      >
       
        </DropdownMenu>
      );
    }
  }