import React, { Component } from 'react'
import { View,Text,StyleSheet,Button,SafeAreaView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Sport from './Sport'
import Settings from './Settings'
import  Calendar  from './Calendar';
import CardView from './CardView'
import ButtonBar from './ButtonBar';
import VenueItem from './VenueItem';
import SlotList from './Slotlist';



let items = [
  { id:0, time : '5', name: '05.00 - 05.30 ', code: 'transparent',price:1500,toggle:false }, { id:1, time : '6', name: '05.30 - 06.00 ', code: 'transparent',price:1500,toggle:false },
  { id:2, time : '6.30', name: '06.00 - 06.30 ', code: 'transparent',price:1500,toggle:false }, {id:3,time : '7', name: '06.30 - 07.00 ', code: 'transparent',price:1500,toggle:false },
  { id:4, time : '7.30', name: '07.00 - 07.30 ', code: 'transparent',price:1500,toggle:false }, {id:5,time : '8', name: '07.30 - 08.00 ', code: 'transparent',price:1500,toggle:false },
  { id:6, time : '8.30', name: '08.00 - 08.30 ', code: 'transparent',price:1500,toggle:false }, {id:7,time : '9', name: '08.30 - 09.00 ', code: 'transparent',price:1500,toggle:false },
  { id:8, time : '9.30', name: '09.00 - 09.30 ', code: 'transparent',price:1500,toggle:false }, {id:9,time : '10', name: '09.30 - 10.00 ', code: 'transparent',price:1500,toggle:false },
  { id:10,time : '10.30', name: '10.00 - 10.30 ', code: 'transparent',price:1500,toggle:false }, {id:11,time : '11', name: '10.30 - 11.00 ', code: 'transparent',price:1500,toggle:false },
 ];

 let itemNoon = [
  { id:0, time : '11.30', name: '11.00 - 11.30 ', code: 'transparent',price:1500,toggle:false }, { id:1, time : '12', name: '11.30 - 12.00 ', code: 'transparent',price:1500,toggle:false },
  { id:2, time : '12.30', name: '12.00 - 12.30 ', code: 'transparent',price:1500,toggle:false }, {id:3,time : '13', name: '12.30 - 13.00 ', code: 'transparent',price:1500,toggle:false },
  { id:4, time : '13.30', name: '13.00 - 13.30 ', code: 'transparent',price:1500,toggle:false }, {id:5,time : '14', name: '13.30 - 14.00 ', code: 'transparent',price:1500,toggle:false },
  { id:6, time : '14.30', name: '14.00 - 14.30 ', code: 'transparent',price:1500,toggle:false }, {id:7,time : '15', name: '14.30 - 15.00 ', code: 'transparent',price:1500,toggle:false },
  { id:8, time : '15.30', name: '15.00 - 15.30 ', code: 'transparent',price:1500,toggle:false }, {id:9,time : '16', name: '15.30 - 16.00 ', code: 'transparent',price:1500,toggle:false },
  { id:10,time : '16.30', name: '16.00 - 16.30 ', code: 'transparent',price:1500,toggle:false }, {id:11,time : '17', name: '16.30 - 17.00 ', code: 'transparent',price:1500,toggle:false },
 ];

 let itemEve = [
  { id:0, time : '17.30', name: '17.00 - 17.30 ', code: 'transparent',price:1500,toggle:false }, { id:1, time : '18', name: '17.30 - 18.00 ', code: 'transparent',price:1500,toggle:false },
  { id:2, time : '18.30', name: '18.00 - 18.30 ', code: 'transparent',price:1500,toggle:false }, {id:3,time : '19', name: '18.30 - 19.00 ', code: 'transparent',price:1500,toggle:false },
  { id:4, time : '19.30', name: '19.00 - 19.30 ', code: 'transparent',price:1500,toggle:false }, {id:5,time : '20', name: '19.30 - 20.00 ', code: 'transparent',price:1500,toggle:false },
  { id:6, time : '20.30', name: '20.00 - 20.30 ', code: 'transparent',price:1500,toggle:false }, {id:7,time : '21', name: '20.30 - 21.00 ', code: 'transparent',price:1500,toggle:false },
  { id:8, time : '21.30', name: '21.00 - 21.30 ', code: 'transparent',price:1500,toggle:false }, {id:9,time : '22', name: '21.30 - 22.00 ', code: 'transparent',price:1500,toggle:false },
  { id:10,time : '22.30', name: '22.00 - 22.30 ', code: 'transparent',price:1500,toggle:false }, {id:11,time : '23', name: '22.30 - 23.00 ', code: 'transparent',price:1500,toggle:false },
 ];

 let itemPrimetime = [
  { id:0, time : '23.30', name: '23.00 - 23.30 ', code: 'transparent',price:1500,toggle:false }, { id:1, time : '00', name: '23.30 - 00.00 ', code: 'transparent',price:1500,toggle:false },
  { id:2, time : '00.30', name: '00.00 - 00.30 ', code: 'transparent',price:1500,toggle:false }, {id:3,time : '01', name: '00.30 - 01.00 ', code: 'transparent',price:1500,toggle:false },
  { id:4, time : '01.30', name: '01.00 - 01.30 ', code: 'transparent',price:1500,toggle:false }, {id:5,time : '02', name: '01.30 - 02.00 ', code: 'transparent',price:1500,toggle:false },
  { id:6, time : '02.30', name: '02.00 - 02.30 ', code: 'transparent',price:1500,toggle:false }, {id:7,time : '03', name: '02.30 - 03.00 ', code: 'transparent',price:1500,toggle:false },
  { id:8, time : '03.30', name: '03.00 - 03.30 ', code: 'transparent',price:1500,toggle:false }, {id:9,time : '04', name: '03.30 - 04.00 ', code: 'transparent',price:1500,toggle:false },
  { id:10,time : '04.30', name: '04.00 - 04.30 ', code: 'transparent',price:1500,toggle:false }, {id:11,time : '05', name: '04.30 - 05.00 ', code: 'transparent',price:1500,toggle:false },
 ];



const cards = [
  {
    text: 'Morning',
    name: 'One',
    id:0,
    item:items,
    
    
  },
  {
    text: 'Afternoon',
    name: 'One',
    id:1,
    item:itemNoon
   
  },{
    text: 'Evening',
    name: 'One',
    id:2,
    item:itemEve
    
  },
  {
    text: 'PrimeTime',
    name: 'One',
    id:3,
    item:itemPrimetime
    
  },
  
];

var totalBill = 
{
  bookingVenue:null,
  bookingVenueLocation:null,
  selectedTimeSlot : null,
  price:null,
  duration:null,
  selectedDateSlot : null,
  selectedDateSlotInWords:null,
  initialState : true,
  count:null,
  zone:null,
  currency:null,
  reservationPrice:null,
};
var bill = 0;
var a  = [];
var venues;


export class BookingsScreen extends Component {
    static navigationOptions = {
        header:null
      };

     
      constructor(props) {
        super(props)
       
        venues = this.props.navigation.getParam('venues','null');
        //booktype = this.props.navigation.getParam('bookType','null');
        this.state = {
           cards : cards,
           totalBill : totalBill
        };

    this.moveToConfirmtionPage = this.moveToConfirmtionPage.bind(this);
      };

       convertUnicode(input) {
        return input.replace(/\\u(\w{4,4})/g,function(a,b) {
          var charcode = parseInt(b,16);
          return String.fromCharCode(charcode);
        });
      }
      
      moveToConfirmtionPage() {

        this.props.navigation.push('Confirmation',{
          totalBill:totalBill,
        });
        };
      

      
      onDateChanged = (onDateChanged,onFullDate) => {

        var date = this.state.totalBill;
        date.selectedDateSlotInWords = onFullDate;

        date.selectedDateSlot = onDateChanged;
        this.setState({date});
      }
      
      

      func = (smh) => { 
          var x = this.state.cards[0];
          var y = this.state.totalBill;

          let filterObject = this.state.cards.filter(item => {
            let returnItem = item.item.filter(retItem =>{
               return retItem.toggle  == true; 
              });
              return returnItem.length;
          });
        


          if(x.item[smh].toggle){
            y.price += 1500;
            y.reservationPrice += (1500*.1)
            y.count+= 1;
            a.push(x.item[smh].time);
            a.sort();
            console.log('on select ',a);
        }else{
            a.splice( a.indexOf(x.item[smh].time), 1 );
            y.price -= 1500;
            y.count -= 1;
            console.log('on un select ',a);
      }
          if(a.length > 1 ){

            y.selectedTimeSlot = ''+a[0]+' - '+a[a.length-1]; 
            y.zone = ' a.m';
          }
          else{
            y.selectedTimeSlot = x.item[smh].name;
          }

          if(filterObject.length>0){
            y.initialState = false;
          }else{
            y.initialState = true;
          }

         y.currency = this.convertUnicode('\u20b9');
         y.bookingVenue = this.props.navigation.getParam('venueName','NO-VENUE');   
         y.bookingVenueLocation = this.props.navigation.getParam('venueLocation','NO_VENUE');
          this.setState({x});
          this.setState({y});
          
        
        
      }  
  
   
  render() {
   let id = this.props.navigation.getParam('venueId', 'NO-VENUE');
   let venueImage = this.props.navigation.getParam('venueImage', 'NO-VENUE');
   let color = this.props.navigation.getParam('colorOverlay', 'NO-VENUE');
   let venueName = this.props.navigation.getParam('venueName','NO-VENUE')
   let venueLocation = this.props.navigation.getParam('venueLocation','NO-VENUE')
    return (
      <View style={s.container}>
         <VenueItem
            venueImage={venueImage}
            colorOverlay={color}
            venueLocation={venueLocation}
            venueName={venueName}
            venueSubtext={'Some Subtitle Text'}
            venueRating={"4.3"}
            id={id}/>
        <View style={{backgroundColor:"transparent",height:100,padding:0}}>
        <Calendar color={color} onDateChanged={this.onDateChanged}/>
        </View>
        <SlotList keyitem={this.state.cards} slotColor={color} func={this.func}/>
        {/* <CardView dataT = {this.state.cards} func={this.func}  /> */}
      <ButtonBar color={color} initialState={this.state.totalBill.initialState} timing1 = {this.state.totalBill.selectedTimeSlot } total = {this.state.totalBill.price} am={this.state.totalBill.zone} currency={this.state.totalBill.currency} onItemClick={this.moveToConfirmtionPage}/>  
      </View>
      
    )
  }
}



export default BookingsScreen;
const s = StyleSheet.create({
  container: {
    flex: 1,
   
},
  backgroundImage: {
      padding:10,
      flex:1,
      margin: 1,
      alignItems: 'center',
    justifyContent:'center',
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#41c300',
    opacity: 0.1,
    
  },

});
