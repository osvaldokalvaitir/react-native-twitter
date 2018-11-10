import { createStackNavigator } from 'react-navigation';

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import New from "./pages/New";

const Routes = createStackNavigator({
  Login,
  Timeline,
  New
});

export default Routes;