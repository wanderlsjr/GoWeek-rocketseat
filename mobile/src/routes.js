import { createStackNavigation } from "react-navigation";

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import New from "./pages/New";

const Routes = createStackNavigation({
  Login,
  Timeline,
  New
});

export default Routes;
