import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { ArrowLeftOutlined, MessageFilled, GoogleOutlined, GlobalOutlined } from '@ant-design/icons'
import "./Login.css";
import axios from "axios";

function Login(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState("");

    function goBack() {
        window.history.go(-1);
    }

    useEffect(() => {
        // 여러 데이터를 array로 받기
        getDataFromDB();
    },[]);

    function getDataFromDB() {
        // db에서 해당 목표 정보 받아오기
        var headers = {
          'Access-Control-Allow-Origin': '*',        
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.get("https://virtserver.swaggerhub.com/VisualUp/VisualUp_Api/1.0.0/login", headers)
        .then((res)=>{
          setData(res.data);
          console.dir(res);
        })
        .catch((err)=>{ 
          console.dir(err);
          const status = err?.response?.status;
          if (status === undefined) {
            console.dir("데이터를 불러오던 중 예기치 못한 예외가 발생하였습니다.\n" + JSON.stringify(err));
          }
          else if (status === 400) {
            console.dir("400에러");
          }
          else if (status === 500) {
            console.dir("내부 서버 오류입니다. 잠시만 기다려주세요.");
          }
        });
    }
    
    return(
        <div className="login-background">
            <a><ArrowLeftOutlined className="login-arrowLeft" style={{ fontSize: '30px'}} onClick={goBack}/></a>
            <br/><br/>
            <Col align="middle" className="login-body">
                <img src={require("./MainLogo.png")} className="login-logo"/>
                <h1 className="title-visualUp">Visual Up!</h1><br/>
                <Row><a href="" ><button type="button" className="google-btn"><GoogleOutlined className="login-img"/><p className="login-font">구글 아이디로 로그인</p> </button></a></Row><br/>
                <Row><a href="" ><button type="button" className="kakao-btn" ><MessageFilled className="login-img"/><p className="login-font">카카오톡 아이디로 로그인</p> </button></a></Row><br/>
                <Row><a href="" ><button type="button" className="sns-btn" ><GlobalOutlined className="login-img"/><p className="login-font">SNS 연동하기</p></button></a></Row>
            </Col>
           
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div> 
    );
}

export default Login;