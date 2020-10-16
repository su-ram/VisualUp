import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {  HashTag, Visualize, GoalList, GoalSet } from '../pages';
import { Col } from 'antd';
import "./Main.css"
import FullPage from './FullPage.js';
import Navigation from "./Navigation.js";
import Navigation2 from "./Navigation2.js";


function Main(){
    const page = window.location.href;
    console.log(page);
    return(
        <Col id="contents">
            {page ==="http://localhost:3000/"?<Navigation/>:<Navigation2/>}
            <Switch>
                <Route exact path="/" component={FullPage}/>
                <Route exact path="/visualize" component={Visualize}/>
                <Route exact path="/visualize/:goalIdx" component={Visualize}/>
                <Route exact path="/hashtag" component={HashTag}/>
                <Route exact path="/hashtag/:hashtag" component={HashTag}/>
                <Route exact path="/goalList" component={GoalList}/>
                <Route exact path="/goalSet" component={GoalSet}/>
                <Route exact path="/goalSet/:goalId" component={GoalSet}/>
                <Redirect path="*" to="/error" />
            </Switch>
        </Col>
    );
}

export default Main;