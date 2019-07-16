import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "./Login";
import WorkOrderSelection from "./WorkOrderSelection";
import WorkOrders from "./WorkOrders";
import ServicePointDetails from "./ServicePointDetails";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene
        key="workOrderSelection"
        component={WorkOrderSelection}
        title="Select Work Order Type"
      />
      <Scene
        key="workorders"
        component={WorkOrders}
        title="Work Orders"
        // renderBackButton={() => renderBackButton()}
        // renderBackButton={() => null}
        renderLeftButton={() => null}
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
