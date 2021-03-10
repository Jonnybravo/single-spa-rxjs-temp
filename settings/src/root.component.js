import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch, useLocation} from "react-router-dom";
import { Container } from "semantic-ui-react";

import WrapperLazy from './components/wrapperLazy';
import SecondaryMenu from "./components/SecondaryMenu";

const SettingsDashboard = WrapperLazy(() => import('./components/SettingsDashboard'));
const AppForm = WrapperLazy(() => import('./components/AppForm'));

export default function Root(props) {
  return (
      <Router basename="/settings">
          <Container fluid style={{padding: '30px'}}>
              <SecondaryMenu />
               <Switch>
                <Route path="/" exact>
                    <SettingsDashboard {...props}/>
                </Route>
                <Route path="/add" exact>
                    <AppForm {...props}/>
                </Route>
              </Switch> 
            </Container>
      </Router>
  );
}
