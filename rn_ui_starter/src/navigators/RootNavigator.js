import { createSwitchNavigator } from 'react-navigation';

import FirstScreen from '../screens/Screen1/FirstScreen';
import SecondScreen from '../screens/Screen2/SecondScreen';

/**
 * Root Switch Navigator
 */
export const RootNavigator = createSwitchNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: 'First',
  },
);

export default RootNavigator;
