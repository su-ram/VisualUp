import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Main, Login, Error, Test } from '../pages';

function App(){
      return (
          <div id="app">
              <Switch>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/error" component={Error}/>
                  <Route exact path="/test" component={Test}/>
                  <Route path="/" component={Main}/>
                  <Redirect path="*" to="/error" />
              </Switch>
          </div>
      );
}

export default App;