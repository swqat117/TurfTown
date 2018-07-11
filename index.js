import { AppRegistry } from 'react-native';
import App from './App';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.ignoredYellowBox = ['Warning: isMounted', 'Warning: Failed'];


AppRegistry.registerComponent('sample', () => App);
