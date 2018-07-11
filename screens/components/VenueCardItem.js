import React, { Component } from 'react'
import { Text,View,ImageBackground,TouchableHighlight } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {colors, gradientArray} from './colors'

class VenueCardItem extends Component {
  render() {
    return(
      <ImageBackground
        source={require('./assets/images/TikiTakaKilpauk')}
        style={styles.venueImage}
        imageStyle={{resizeMode: 'cover'}}>
          <View //color overlay container
            style={
              [styles.container,
              {backgroundColor: gradientArray(colors.secondary4,4),}]}>
          
          </View>
      </ImageBackground>
    )
  }
}