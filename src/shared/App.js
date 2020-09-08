import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../pages'

function App(){
      return (
          <div id="app">
              <Switch>
                  <Route exact path="/" component={Main}/>
              </Switch>
          </div>
      );
}

export default App;