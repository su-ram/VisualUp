import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {  HashTag, Visualize, GoalList, GoalSet } from '../pages';
import { Col } from 'antd';
import "./Main.css"
import FullPage from './FullPage.js';
import Navigation from "./Navigation.js";

function Main(){
    return(
        <Col id="contents">
            <Navigation/>
            <Switch>
                <Route exact path="/" component={FullPage}/>
                <Route exact path="/visualize" component={Visualize}/>
                <Route exact path="/hashtag" component={HashTag}/>
                <Route exact path="/goalList" component={GoalList}/>
                <Route exact path="/goalSet" component={GoalSet}/>
                <Redirect path="*" to="/error" />
            </Switch>
        </Col>
    );
}

export default Main;