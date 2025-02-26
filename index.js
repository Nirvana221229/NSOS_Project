import { AppRegistry } from 'react-native';
import App from './App'; // Charge le composant principal de l'application
import { name as appName } from './app.json'; // Charge le nom du projet

AppRegistry.registerComponent(appName, () => App);
