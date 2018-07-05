import { createStackNavigator } from 'react-navigation';
import MainScreenNavigator from './MainScreenNavigator';
import QRcode from '../containers/QRcode';
import Camera from '../containers/Camera';

const RootNavigator = createStackNavigator(
      {
        Home: {
          screen: MainScreenNavigator,
          navigationOptions: {
            title: '首页'
          },
        },
        QRcode: {
          screen: QRcode,
          navigationOptions: {
            //  header: null
          }
        },
        Camera: {
          screen: Camera,
          navigationOptions: {
            header: null
          }
        }
      }
);
export default RootNavigator;