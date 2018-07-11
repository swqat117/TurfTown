import React, { Component } from 'react'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment';
export class Calendar extends Component {
  
  getSelectedDate1(e)	{
    this.props.onDateChanged(e.format('YYYY-MM-DD'),e.format(' Do MMM YYYY, dddd '));
  }

  render() {
    return (
      
        <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 100}}
        daySelectionAnimation={{type: 'background', duration: 200, highlightColor: `${this.props.color}`}}
        style={{height:100, paddingTop: 10, paddingBottom: 4}}
        calendarHeaderStyle={{color: 'black',fontSize:12,padding:5,}}
        calendarColor={'white'}
        dateNumberStyle={{color: 'black',fontSize:10}}
        weekendDateNameStyle={{color: 'black',fontSize:10}}
        weekendDateNumberStyle={{color: 'black',fontSize:10}}
        dateNameStyle={{color: 'black',fontSize:10}}
        datesWhitelist={[{
          start: moment(),
          end: moment().add(9, 'months')  // total 4 days enabled
        }]}
        highlightDateNumberStyle={{color: 'white',fontSize:12}}
        highlightDateNameStyle={{color: 'white',fontSize:12}}
          iconContainer={{flex: 0.1}}
          onDateSelected={(e)=>this.getSelectedDate1(e) }
    />
    
    
    )
  }
}

export default Calendar;
