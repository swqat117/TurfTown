import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class PaymentScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Payments Screen</Text>
            </View>
        );
    }
}
export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});