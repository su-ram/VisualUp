import React from 'react';
import { Row, Col } from 'antd';
import { ArrowLeftOutlined, MessageFilled, GoogleOutlined, GlobalOutlined } from '@ant-design/icons'
import "./Login.css";

function Login(){
     
    return(
        <div className="login-background">
            <a><ArrowLeftOutlined className="login-arrowLeft" style={{ fontSize: '30px'}} /></a>
            <br/><br/>
            <Col align="middle" className="login-body">
                <img src={require("./MainLogo.png")} className="login-logo"/>
                <h1 className="title-visualUp">Visual Up!</h1><br/>
                <Row><button type="button" className="google-btn" onClick=""><GoogleOutlined className="login-img"/><p className="login-font">구글 아이디로 로그인</p> </button></Row><br/>
                <Row><button type="button" className="kakao-btn" onClick=""><MessageFilled className="login-img"/><p className="login-font">카카오톡 아이디로 로그인</p> </button></Row><br/>
                <Row><button type="button" className="sns-btn" onClick=""><GlobalOutlined className="login-img"/><p className="login-font">SNS 연동하기</p></button></Row>
            </Col>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>   
    );
}

export default Login;