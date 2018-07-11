import React, {Component} from 'react'

import {Text, View, ImageBackground, TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {colors} from './colors'
class VenueCard extends Component {

_onPress = (e) => {
    e.preventDefault();
    this.props.onClicked(this.props.venueName,this.props.id,this.props.venueLocation,this.props.colorOverlay,this.props.venueImage);
}


    render() {
        return (
            <View style={[styles.container, styles.center]}>
                <ImageBackground
                    source={this.props.venueImage}
                    style={styles.venueImage}
                    imageStyle={{
                    resizeMode: 'cover'
                }}>
                    <View
                        style={[styles.container,{backgroundColor:`${this.props.colorOverlay}`}]}>
                        <View style={styles.container}>
                            <View style={styles.flex3}></View>
                            <View style={styles.flex2}>
                                <View style={[styles.flex3, styles.paddingLeft, styles.justifyCenter]}>
                                    <Text style={[styles.text1, styles.textWhite, styles.quickSandMedium]}>{this.props.venueName} {this.props.venueLocation}</Text>
                                    <Text
                                        style={[styles.text2, styles.textWhite, styles.quickSandMedium,styles.paddingLeft4, styles.paddingTop4]}>{this.props.venueSubtext}</Text>
                                </View>
                                <View
                                    style={[styles.flex2, styles.justifyCenter, styles.flexRow, styles.paddingBottom8]}>
                                    <View style={[styles.flex2, styles.flexRow,styles.paddingLeft11]}>
                                        <TouchableOpacity style={[styles.container, styles.center]}
                                                          >
                                            <Text style={[styles.text3, styles.textWhite,styles.padding5,  
                                            styles.borderRadius]}>{this.props.host}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.container, styles.center]}
                                                          onPress={this._onPress}   
                                        >
                                            <Text style={[styles.text3, styles.textWhite,styles.padding5,  
                                              styles.borderRadius,]}>{this.props.book}</Text>
                                        </TouchableOpacity>
                                        <View style={[styles.container, styles.center,styles.flexRow]}>
                                            <Icon name='md-star-half' size={20} color={colors.white} style={[styles.paddingLeft4]}/>
                                            <Text style={[styles.text2, styles.textWhite,styles.paddingLeft4]}>{this.props.venueRating}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex2}></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default VenueCard