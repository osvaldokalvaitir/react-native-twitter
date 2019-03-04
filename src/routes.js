import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createAppContainer(
  createStackNavigator({
    Login: { screen: Login },
    Timeline: { screen: Timeline },
    New: { screen: New },
  }),
);

export default Routes;
