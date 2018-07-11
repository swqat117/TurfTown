import React, {Component} from 'react';

import {StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {colors} from './colors'


let screenWidth = Dimensions
    .get('window')
    .width;

class VenueItem extends Component {

    render() {
        console.log('color for venue item'+this.props.colorOverlay);
        return (
            <View style={[s.venueItem]}>
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
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

const s = StyleSheet.create({
    venueItem: {
        flexDirection: "column",
        backgroundColor: "#333",
        borderBottomColor: "#AAAAAA",
        width: screenWidth,
    },
    cover: {
        flexDirection: "column",
        flex: 1
    },
    infoView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    info: {
        flexDirection: 'row',
        height: 50
    },
    brandView: {
        flex: 1,
        backgroundColor: '#004D40AA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameView: {
        flex: 1,
        backgroundColor: '#0D47A1AA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#FFF',
        fontFamily: 'Verdana'
    }
});

export default VenueItem;