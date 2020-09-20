import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Login } from '../pages';

function App(){
      return (
          <div id="app">
              <Switch>
                  <Route exact path="/login" component={Login}/>
                  <Route path="/" component={Main}/>
              </Switch>
          </div>
      );
}

export default App;