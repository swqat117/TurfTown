import React, { Component } from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
  FlatList 
} from 'react-native';

import SlotItem from './SlotItem';

const venues = [
  {
    venueId: 1,
    venueName: "T Nagar",
    venueBrand: "Tiki Taka",
    venueImage: require('./../../assets/tiki-taka-kilpauk.jpg'),
  },
  {
    venueId: 2,
    venueName: "Kilpauk",
    venueBrand: "Tiki Taka",
    venueImage: require('./../../assets/tiki-taka-tnagar.jpg'),
  },
];
var x = null;

class SlotList extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
       data: venues,
    };
  };

  _addKeysToVenues = venues => {
    return venues.map( venue => {
      return Object.assign(venue, {key: venueId});
    });
  };

  onclick = (check) => {
    this.props.func(check)
    
   }
   _keyExtractor = (item,index) => index.toString()


  _renderItem = ({item}) => {
    return(
      <SlotItem
      item={item.item}
      onclick={this.onclick}
      name={item.text}
      slotItemColor={this.props.slotColor}
      />
    );
  }  

  render() {
    return(
      <View style={s.container}>
      <FlatList
      data={this.props.keyitem}
      renderItem={this._renderItem}
      horizontal={true}
      pagingEnabled={true}
      keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
}

export default SlotList;

const s = StyleSheet.create({
    container:{
          flex:2,
          
    }
});