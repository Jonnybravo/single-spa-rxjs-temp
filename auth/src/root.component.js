import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch, useLocation} from "react-router-dom";
import { Container } from "semantic-ui-react";

import WrapperLazy from './components/wrapperLazy';

const AutheticationForm = WrapperLazy(() => import('./components/AutheticationForm'));

export default function Root(props) {
  return (
      <Router basename="/login">
          <Container fluid style={{padding: '30px'}}>
               <Switch>
                <Route path="/" exact>
                  <AutheticationForm {...props}/>
                </Route>
              </Switch> 
            </Container>
      </Router>
  );
}
