import React, { Component } from 'react';
import { StyleSheet,View,Text,Button } from 'react-native'
import styles from './../styles/styles'

export class DetailsScreen extends Component {
  
  
    onClick = (event) => {
      
        this.props.navigation.navigate('Bookings');
    }
    


    render() {9
    return (
      <View style={styles.container}>
       <Button
          title="Book Now"
          onPress={this.onClick}
        />
        </View>
    )
  }
};

export default DetailsScreen;


