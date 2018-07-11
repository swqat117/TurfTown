import React, { Component } from 'react'

import { 
  Text, 
  View,
  ImageBackground,
  FlatList,
  SafeAreaView
} from 'react-native'
import styles from './styles'
import {colors, gradientArray} from './colors'
import VenueCard from './VenueCard'

const venues = [
  { id:0,
    venueName: 'TikiTaka',
    venueLocation:'T.Nagar',
    venueImage: require('./../../assets/images/TikiTakaTNagar.jpg'),
    colorOverlay: colors.secondary4Op4,
    venueSubtext: 'some subtitle text',
    venueRating: 4.2,
    venueForBook:false,
    venueForHost:false,
  },
  {
    venueName: 'TikiTaka',
    venueLocation:'Kilpauk',
    id:1,
    venueImage: require('./../../assets/images/TikiTakaKilpauk.jpg'),
    colorOverlay: colors.primaryOp4,
    venueSubtext: 'some subtitle text',
    venueRating: 4.2,
    venueForBook:false,
    venueForHost:false,
  },
  {
    venueName: 'TikiTaka',
    id:2,
    venueLocation:'ECR',
    venueImage: require('./../../assets/images/TikiTakaECR.jpeg'),
    colorOverlay: colors.secondary3Op4,
    venueSubtext: 'some subtitle text',
    venueRating: 4.2,
    venueForBook:false,
    venueForHost:false,
  },
  {
    venueName: 'TikiTaka ',
    id:3,
    venueLocation:'Velachery',
    venueImage: require('./../../assets/images/TikiTakaVelachery.jpg'),
    colorOverlay: colors.secondary1Op4,
    venueSubtext: 'some subtitle text',
    venueRating: 4.2,
    venueForBook:false,
    venueForHost:false,
  },
]

class HomeScreen extends Component {
constructor(props) {
  super(props)

  this.state = {
     venues:venues
  }
}


onBookClicked = (venueName,venueId,venueLocation,venueColorOverlay,venueImage) => {
  let x = this.state.venues;
    this.props.navigation.navigate('Bookings',{
    venueId:venueId,
    venueName: venueName,
    venueLocation:venueLocation,
    colorOverlay:venueColorOverlay,
    bookType: this.props.book,
    venueImage:venueImage,
  });
  }

  static navigationOptions = {
    header: null,
}
  _renderItem = ({item}) => (
    <VenueCard
      venueImage={item.venueImage}
      colorOverlay={item.colorOverlay}
      venueName={item.venueName}
      venueLocation={item.venueLocation}
      venueSubtext={item.venueSubtext}
      venueRating={item.venueRating}
      book='BOOK'
      host='HOST'
      id={item.id}
      onClicked={this.onBookClicked}
      />
  )

  _keyExtractor = (item,index) => index.toString()

  render() {
    return(
        <FlatList
          data={this.state.venues}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          pagingEnabled={false}/>
    )
  }
}

export default HomeScreen