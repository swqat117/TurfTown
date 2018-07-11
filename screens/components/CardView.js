
// import React, { Component } from "react";
// import { StyleSheet,View } from 'react-native';
// import { Container,DeckSwiper, Header, Title, Content, Button, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";
// import GridView from './TGridView'
// import Icon from 'react-native-vector-icons/Ionicons'


// export default class CardView extends Component {

// constructor(props) {
//   super(props)
  
// }
//  onclick = (check) => {
//   this.props.func(check)
//  }
// render() {
//   return (
//     <View style={{flex: 2,backgroundColor: 'white',flexDirection:'column'}}>
//       <DeckSwiper
//       dataSource={this.props.dataT}
//       renderItem={item => 
//           <Card style={{ elevation: 1 }}>
//             <CardItem>
//                 <Left>
//                   <Icon name="ios-arrow-back-outline" color='#6d6d6d' size={26} style={{marginStart:16}}/>
//                 </Left>
//                 <Body>
//                 <Text style={{fontSize:32,fontFamily:'Allura-Regular'}}>{item.text}</Text>
//               </Body>
//               <Right>
//               <Icon name="ios-arrow-forward-outline" color='#6d6d6d' size={26} style={{marginEnd:14}}/>
//               </Right>
//           </CardItem>
//           <CardItem cardBody>
//          <GridView   dataItem = {item.item} onclick = {this.onclick}/>
//           </CardItem>
         
//         </Card>
//       }
//     />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   gridView: {
//     paddingTop: 10,
//     flex: 1,
//   },
//   itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 5,
//     padding: 10,
//     height: 50,
//     borderColor: '#2c3e50',
//     borderWidth: 1,
//   },
//   itemName: {
//     fontSize: 10,
//     color: '#2c3e50',
//     fontWeight: '600',
//     textAlign:'center'
//   },
//   itemCode: {
//     fontWeight: '400',
//     fontSize: 8,
//     color: '#2c3e50',
//     textAlign:'center'
    
//   },
// });
