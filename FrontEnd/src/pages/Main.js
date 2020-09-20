import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../components';
import { HashTag, Visualize } from '../pages';
//import { Line } from '@ant-design/charts';

function Main(){
    return(
        <div>
            <Header/>
            Main
            <Switch>
                <Route exact path="/hashtag" component={HashTag}/>
                <Route exact path="/visualize" component={Visualize}/>
            </Switch>
        </div>
    );
}

export default Main;