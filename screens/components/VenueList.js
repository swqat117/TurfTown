import React, { Component } from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
  FlatList 
} from 'react-native';

import VenueItem from './VenueItem';

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

class VenueList extends Component {

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

  _keyExtractor = (item,index) => index.toString()

  _renderItem = ({item}) => {
    return(
      <VenueItem
      venueImage={item.venueImage}
      colorOverlay={item.colorOverlay}
      venueLocation={item.venueLocation}
      venueName={item.venueName}
      venueSubtext={item.venueSubtext}
      venueRating={item.venueRating}
      id={item.id}/>
    );
  }  

  render() {
    return(
      <View style={s.container}>
      <FlatList
      data={this.props.dataObject}
      renderItem={this._renderItem}
      horizontal={true}
      pagingEnabled={true}
      initialScrollIndex={this.props.id}
      />
      </View>
    );
  }
}

export default VenueList;

const s = StyleSheet.create({
    container:{
          height:300
    }
});