import { StyleSheet } from 'react-native';

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    moveRight:{
        paddingRight: 20,
        alignSelf: 'flex-start',
        marginRight: 50,
    },

    backgroundImage: {
        flex: 1,
        width: null,
        height: 132,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'red',
      opacity: 0.3
    }

});