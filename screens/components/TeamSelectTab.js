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

class TeamSelectTab extends Component {

  _selectTeam = () => {
    this.props.onPress(this.props.selectTeam)
  }

  render() {
    return(
      <ElevatedView
        elevation={3}
        style={styles.stayElevated}
      >
      <TouchableOpacity onPress={this._selectTeam}>
        <Text style={styles.couponStyle}>{this.props.selectTeam}</Text>
      </TouchableOpacity>
      <Icon name="ios-arrow-forward-outline" color='#6d6d6d' size={28} style={{position:'absolute',right:10,top:10}}/>
      </ElevatedView>
    )
  }
}

export default TeamSelectTab