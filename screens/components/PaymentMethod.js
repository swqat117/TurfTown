import React, { Component } from 'react'
import ElevatedView from './react-native-elevated-view'

import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

class PaymentMethod extends Component {

  _paymentModal = () => {
    this.props.onPress(this.props.name)
  }
  

  render() {
    return(
      <ElevatedView
        elevation={3}
        style={styles.stayElevated}
      >
      <TouchableOpacity
        onPress={this._paymentModal}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
        <Icon name="ios-arrow-forward-outline" color='#6d6d6d' size={28} style={{position:'absolute',right:10,top:10}}/>
      </TouchableOpacity>
      </ElevatedView>
    )
  }
}

export default PaymentMethod