import React from "react";
import { Router, Scene } from "react-native-router-flux";
import WorkOrders from "./WorkOrders";
import Login from "./Login";
import ServicePointDetails from "./ServicePointDetails";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene
        key="workorders"
        component={WorkOrders}
        title="Work Orders"
        // renderBackButton={() => renderBackButton()}
        // renderBackButton={() => null}
        renderLeftButton={()=>(null)}
      />
      <Scene
        key="servicepointdetails"
        component={ServicePointDetails}
        title="Service Point Details"
      />
    </Scene>
  </Router>
);
export default Routes;
