import React, { Component } from 'react'

import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'

import ElevatedView from './react-native-elevated-view'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

class CouponTab extends Component {

  _couponModal = () => {
    this.props.onPress(this.props.name)
  }

  render() {
    return(
      <ElevatedView
        elevation={3}
        style={styles.stayElevated}>
      <TouchableOpacity onPress={this._couponModal}>
        <Text style={styles.couponStyle}>{this.props.couponNumber} {this.props.couponText}</Text>
      </TouchableOpacity>
      <Icon name="ios-arrow-forward-outline" color='#6d6d6d' size={28} style={{position:'absolute',right:10,top:10}}/>
      </ElevatedView>
    )
  }
}

export default CouponTab