import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HashTag, Visualize, GoalList, GoalSet } from '../pages';
import { Col } from 'antd';
import "./Main.css"

function Main(){
    return(
        <Col>
            <Col id="contents">
                <Switch>
                    <Route exact path="/" component={Visualize}/>
                    <Route exact path="/hashtag" component={HashTag}/>
                    <Route exact path="/goalList" component={GoalList}/>
                    <Route exact path="/goalSet" component={GoalSet}/>
                    <Redirect path="*" to="/error" />
                </Switch>
            </Col>
        </Col>
    );
}

export default Main;