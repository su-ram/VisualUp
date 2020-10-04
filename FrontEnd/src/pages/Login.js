import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import KaKaoLogin from 'react-kakao-login';
import styles from './Login.module.css';
import { Row, Col } from 'antd';
import { ArrowLeftOutlined, MessageFilled, GoogleOutlined, GlobalOutlined } from '@ant-design/icons'

function Login(){
    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
        <div className={styles.background}>
            <a><ArrowLeftOutlined className={styles.arrowLeft} style={{ fontSize: '30px'}} /></a>
            <br/><br/>
            <Col align="middle" className={styles.body}>
                <img src={require("./MainLogo.png")} className={styles.logo}/>
                <h1 className={styles.visualUp}>Visual Up!</h1><br/>
                {/*<Row><button type="button" className={styles.btn1}><GoogleOutlined className={styles.img}/><p className={styles.font}>구글 아이디로 로그인</p> </button></Row>*/}
                <Row><GoogleLogin
                        clientId="826293259345-74gotsmf849duoqnbnvtpkl9m058hcdl.apps.googleusercontent.com"
                        buttonText="구글 아이디로 로그인"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className={styles.btn1}/></Row>
                {/*<Row><button type="button" className={styles.btn2}><MessageFilled className={styles.img}/><p className={styles.font}>카카오톡 아이디로 로그인</p> </button></Row>*/}
                <Row><KaKaoLogin 
                        jsKey={'447e7fe92218897c317024ee7bf17333'}
                        buttonText='카카오톡 아이디로 로그인'
                        onSuccess={this.responseKaKao}
                        getProfile={true}
                        className={styles.btn2}/></Row>
                <Row><button type="button" className={styles.btn3}><GlobalOutlined className={styles.img}/><p className={styles.font}>SNS 연동하기</p></button></Row>
            </Col>
            <br/><br/><br/><br/><br/><br/>
        </div>   
    );
}

export default Login;