import React, {Component} from 'react';

import {StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';
import GridView from './TGridView'
import Hr from './react-native-hr'
import Icon from 'react-native-vector-icons/Ionicons';
import ElevatedView from './react-native-elevated-view'
let screenWidth = Dimensions
    .get('window')
    .width;

class SlotItem extends Component {


    onclick = (check) => {
        console.log(check)
        this.props.onclick(check)
        
       }

    render() {
        return (
            <ElevatedView
            elevation={3}
             style={styles.venueItem}>
                <View style={styles.viewstyle}>
                   <Icon name="ios-sunny-outline" color='#2c3e50EF' size={26} style={{marginTop:10,padding:2,paddingLeft:4,flexDirection: 'row',}}/>
                   <Text style={styles.textstyle} >{this.props.name} </Text>
                   <Icon name="ios-remove-outline" color='#2c3e50EF' size={20} style={{marginTop:14,padding:2,paddingLeft:4,flexDirection: 'row',}}/>
                   <Text style={styles.textstyle2} >All slots available </Text>
                </View>
                   <Hr lineStyle={{
                          backgroundColor:'#2c3e503F',
                                              margin: 1,
                                 flexDirection: 'column',
       }} />
                <GridView   dataItem = {this.props.item} onclick = {this.onclick} gridTextColor={this.props.slotItemColor}/>
            </ElevatedView>
        );
    }
}

const styles = StyleSheet.create({
    viewstyle:{
        paddingLeft: 8,
        backgroundColor:'transparent',
        flexDirection: 'row',

    },
    textstyle:{
        padding: 2,
        marginTop: 15,
        fontSize:14,
        color:'#2c3e50EF',
        fontWeight:'200',
        
    },
    textstyle2:{
        padding: 2,
        marginLeft: 4,
        marginTop: 17,
        fontSize:11,
        color:'#2c3e50EF',
        fontWeight:'200',
        
    },
    venueItem: {
        flexDirection: "column",
        backgroundColor: "#fff",
        width: screenWidth,
        height: 216,
        
    },
    cover: {
        flexDirection: "column",
        flex: 1
    },
    infoView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    info: {
        flexDirection: 'row',
        height: 50
    },
    brandView: {
        flex: 1,
        backgroundColor: '#004D40AA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameView: {
        flex: 1,
        backgroundColor: '#0D47A1AA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#FFF',
        fontFamily: 'Verdana'
    }
});

export default SlotItem;