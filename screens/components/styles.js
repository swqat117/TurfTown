import {StyleSheet} from 'react-native'
import {colors, gradientArray} from './colors'

const styles = StyleSheet.create({
  container: {flex:1},
  flex2:{flex:2}, flex3:{flex:3}, lineBar: {width:1, height:3,},
  containerText:{color:colors.black,fontSize: 20,},
  center:{justifyContent: 'center',alignItems: 'center',},
  venueImage:{width:'100%',height:300},
  venueImage1:{width:'100%'},
  primaryBackground:{backgroundColor: colors.black,},
  whiteBackground:{backgroundColor: colors.white,},
  paddingLeft:{paddingLeft: 16,}, paddingBottom: {paddingBottom: 16},
  paddingTop4:{paddingTop: 4},paddingBottom8: {paddingBottom: 8},
  text1:{fontSize:28},text2:{fontSize:18}, text3: {fontSize:10},
  textWhite:{color:colors.white},
  josefinBold:{fontFamily: 'JosefinSans-Bold'},
  josefinLight:{fontFamily: 'JosefinSans-Light'},
  josefinRegular:{fontFamily: 'JosefinSans-Regular'},
  wendyRegular:{fontFamily:'WendyOne-Regular'},
  quickSandMedium:{fontFamily:'Quicksand-Medium'},
  justifyCenter:{justifyContent: 'center'}, alignCenter:{alignItems: 'center'},
  flexRow:{flexDirection: 'row',},
  overlayContainer:{backgroundColor: colors.blackOverlay},
  absolutePosition:{position: 'absolute',bottom:4,left:4,},
  paddingLeft4:{paddingLeft: 4,},
  paddingLeft5:{paddingLeft: 5,},
  paddingLeft6:{paddingLeft: 6,},
  paddingLeft7:{paddingLeft: 7,},
  paddingLeft8:{paddingLeft: 8,},
  paddingLeft11:{paddingLeft: 12},
  paddingBottom4:{paddingBottom: 4,},
  paddingRight4:{paddingRight: 4,},
  padding4:{padding: 4,},
  padding5:{padding:5},
  padding6:{padding:6},
  padding7:{padding:7},
  padding8:{padding:8},
  borderRadius:{borderRadius:5,borderWidth: 1,borderColor: 'white',},
  
  // Payment Method
  container1: {
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
})

export default styles