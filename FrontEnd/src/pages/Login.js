import React from 'react';
import styles from './Login.module.css';
import { Row, Col } from 'antd';
import { ArrowLeftOutlined, MessageFilled, GoogleOutlined, GlobalOutlined } from '@ant-design/icons'

function Login(){
    return(
        <div className={styles.background}>
            <ArrowLeftOutlined className={styles.arrowLeft} style={{ fontSize: '30px'}} ></ArrowLeftOutlined>
            <br/><br/>
            <Col align="middle" className={styles.body}>
                <img src={require('./LoginLogo.png')} className={styles.logo}/> 
                <h1 className={styles.visualUp}>Visual Up!</h1><br/>
                <Row><button type="button" className={styles.btn1}><GoogleOutlined className={styles.img}/><p className={styles.font}>구글 아이디로 로그인</p> </button></Row>
                <Row><button type="button" className={styles.btn2}><MessageFilled className={styles.img}/><p className={styles.font}>카카오톡 아이디로 로그인</p> </button></Row>
                <Row><button type="button" className={styles.btn3}><GlobalOutlined className={styles.img}/><p className={styles.font}>SNS 연동하기</p></button></Row>
            </Col>
        </div>
        
    );
}

export default Login;