import React, { Component } from 'react';
import { StyleSheet,View,Text,Button } from 'react-native'
import Settings from './Settings';
import ConfirmationBar from './ConfirmationBar'
import PaymentMethod from './PaymentMethod'
import CouponTab from './CouponTab'
import OrderDetails from './OrderDetails'
import TeamSelectTab from './TeamSelectTab'

export class ConfirmationScreen extends Component {
  

    static navigationOptions = {
        headerTitle: 'Confirm Checkout',
        headerRight: <Settings />,
        tabBarVisible:false,
        tabBarHidden: true,
        
        headerStyle: {
            backgroundColor: '#fff',
            borderBottomColor: 'transparent',
            shadowColor: 'transparent',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
      };
      constructor(props) {
        super(props)
      
        this.state = {
           bookingInfo : this.props.navigation.getParam('totalBill', 'NO-VENUE')
        }
        console.log(this.state.bookingInfo)
      }
      
      
     componentWillUpdate(){
      this.setState({bookingInfo :this.props.navigation.getParam('totalBill', 'NO-VENUE')})
      console.log(this.state.bookingInfo)
      
     } 
      moveToConfirmtionPage() {
        this.props.navigation.push('Payments');
        console.log('pass');
       // this.props.navigation.navigate('Confirmation', this.state.totalBill);
        };
    
    _paymentModal = (params) => {
      console.log(params)
    }
    
    _couponModal = (params) => {
      console.log(params)
    }

    _selectTeam = (params) => {
      console.log(params)
    }

    _onSelect = (index, value) => {
      if (index === 0) {
        this.setState({
          this.state.bookingInfo.price='500'
        })
      } else {
        this.setState({
          this.state.bookingInfo.price='1500'
      })
      }
  }
    
    
    render() {
    return (
      <View style={styles.container}>
      <View  style={{flex:1}}>

      <PaymentMethod name='Payment Method' onPress={this._paymentModal}/>

      <CouponTab couponNumber='8' couponText='coupons available' name='Coupon Tab' onPress={this._couponModal}/>

      <OrderDetails name='Order Details' date={this.state.bookingInfo.selectedDateSlotInWords} timeOfDay='Morning' time={this.state.bookingInfo.selectedTimeSlot}
                    ampm={this.state.bookingInfo.zone} slotLength='2 hours' brandName={this.state.bookingInfo.bookingVenue} brandLocation={this.state.bookingInfo.bookingVenueLocation} slotPrice={this.state.bookingInfo.price}
                    slotReservationPrice='500' paymentOption1='Pay Full Amount'
                    paymentOption2='Pay Rs 500 to reserve the slot.The rest can be paid at the respective venue.'
                    onSelectRadioOption={this._onSelect}/>
      
      <TeamSelectTab  selectTeam='Select Team' onPress={this._selectTeam}/>
      </View>
      <ConfirmationBar style={{position:'absolute',bottom:0,}} onItemClick={this.moveToConfirmtionPage}
                        price={this.state.bookingInfo.slotPrice}/>
    </View>
  );
}
}

var styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#e2e1e0'
},

stayElevated: {
  height: 50,
  margin: 8,
  padding:6,
  backgroundColor: 'white'
},

stayElevated1: {
  height:350,
  margin: 8,
  padding:6,
  backgroundColor: 'white'
},
textStyle:{
  padding:4,
  margin:6,
  fontWeight:'700',
  fontSize:16,


},
couponStyle:{
  padding:4,
  margin:6,
  fontWeight:'400',
  fontSize:15,


},
recieptStyle:{
  padding:4,
  margin:6,
  fontWeight:'400',
  fontSize:15,
  textAlign:'center',


},
t:{
  padding:4,
  margin:6,
  fontWeight:'700',
  fontSize:22,
  textAlign:'left',


},q:{
  paddingLeft:4,
  
  marginLeft:6,
  fontWeight:'400',
  fontSize:14,
  textAlign:'left',
  color: '#6d6d6d'


},test:{
  fontWeight:'400',
  fontSize:14,
  textAlign:'left',
  color: '#6d6d6d'


},

s:{
  marginTop: 20,
  paddingTop:10,
  paddingBottom:10,
  paddingRight:10,
  paddingLeft:4,
  fontWeight:'400',
  fontSize:14,
  textAlign:'center',
  color: '#6d6d6d'


},
r:{
  paddingRight:10,
  paddingLeft:10,
  paddingBottom: 10,
  fontWeight:'400',
  fontSize:24,
  textAlign:'center',


}
});

export default ConfirmationScreen;


