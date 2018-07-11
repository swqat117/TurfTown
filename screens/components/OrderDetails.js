import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'

import ElevatedView from './react-native-elevated-view'
import Icon from 'react-native-vector-icons/Ionicons'

import Hr from './react-native-hr'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import styles from './styles'

class OrderDetails extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <ElevatedView
        elevation={1}
        style={styles.stayElevated1}
      >
      <Text style={styles.recieptStyle}>{this.props.name}</Text>
      <Hr lineStyle={{
          backgroundColor: "#6d6d6dAF",
          margin: 8,
       }} />
      <Icon name="md-calendar" color='#6d6d6d' size={22} style={{position:'absolute',right:10,top:12}}/>
      <Text style={styles.t}>{this.props.date}</Text>
      <Text style={styles.q}>{this.props.timeOfDay} : {this.props.time} {this.props.ampm}( {this.props.slotLength})</Text>
      <Text style={styles.q}>Venue : {this.props.brandName} {this.props.brandLocation}</Text>

       <Text style={styles.s}>Total</Text>
       <Text style={styles.r}>{this.state.price}</Text>
       <RadioGroup
        onSelect = {(index, value) => this.props.onSelectRadioOption(index,valu)}
        color='#0D47A1AA'
        highlightColor='transparent'
        selectedIndex={0}
        style={{paddingTop: 2,}}
      >
        <RadioButton value={this.props.slotPrice} >
          <Text style={styles.test}>{this.props.paymentOption1}</Text>
        </RadioButton>

        <RadioButton value={this.props.slotReservationPrice}>
          <Text style={styles.test}>{this.props.paymentOption2}</Text>
        </RadioButton>

        
      </RadioGroup>
       
      </ElevatedView>
    )
  }
}

export default OrderDetails