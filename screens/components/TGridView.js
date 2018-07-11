import React, { Component } from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import GridView
 from 'react-native-super-grid';


export class TGridView extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       dataItem : this.props.dataItem
    }
  }
  

  convertUnicode(input) {
    return input.replace(/\\u(\w{4,4})/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode);
    });
  }

  
  pressHandler(smh) {
      let x = this.state.dataItem[smh];
      x.toggle = !x.toggle;
      this.setState({x});
      this.props.onclick(smh)
    }    
  
  render() {
    
    return (
        <GridView
        itemDimension={80}
        
        items={this.state.dataItem}
        style={styles.gridView}
        renderItem={item =>
          (
            
            <TouchableOpacity  onPress={() => this.pressHandler(item.id)} style={ this.state.dataItem[item.id].toggle?[styles.itemContainerToggle,{backgroundColor: `${this.props.gridTextColor}`,}]:styles.itemContainer}>
            <View>
            <Text style={this.state.dataItem[item.id].toggle ? styles.itemNameToggle:[styles.itemName,{color: `${this.props.gridTextColor}`,}]}>{item.name}</Text>
            <Text style={this.state.dataItem[item.id].toggle ? styles.itemCodeToggle:styles.itemCode}>{this.convertUnicode('\u20b9')} {item.price}</Text>
            </View>
          </TouchableOpacity>

            

        )}
      />
    )
  }
}

export default TGridView;

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    paddingBottom: 8,
    height: 40,
    borderColor: '#0D47A1AA',
    borderWidth: 0,
    backgroundColor:'#6d6d6d1f',
    elevation:2,
  },
  itemContainerToggle: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 6,
    height: 40,
   
  },
  itemName: {
    fontSize: 9,
    
    fontWeight: '400',
    textAlign:'center',
    padding :1,
  },
  itemNameToggle: {
    fontSize: 9,
    color: 'white',
    fontWeight: '400',
    textAlign:'center',
    padding :1,
  },
  itemCode: {
    fontWeight: '400',
    fontSize: 9,
    color: '#2c3e50',
    textAlign:'center',
    padding : 1
    
  },
  itemCodeToggle: {
    fontWeight: '400',
    fontSize: 9,
    color: '#fff',
    textAlign:'center',
    padding : 1
    
  },
});

