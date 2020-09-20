import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../components';
import { HashTag, Visualize, GoalList, GoalSet } from '../pages';
//import { Line } from '@ant-design/charts';

function Main(){
    return(
        <div>
            <Header/>
            Main
            <Switch>
                <Route exact path="/hashtag" component={HashTag}/>
                <Route exact path="/visualize" component={Visualize}/>
                <Route exact path="/goalList" component={GoalList}/>
                <Route exact path="/goalSet" component={GoalSet}/>
            </Switch>
        </div>
    );
}

export default Main;