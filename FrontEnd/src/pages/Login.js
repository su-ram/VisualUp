import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { ArrowLeftOutlined, MessageFilled, GoogleOutlined, GlobalOutlined } from '@ant-design/icons'
import "./Login.css";
import axios from "axios";
import full_logo from "../../src/img/full_logo.png";

function Login(){
    const [data, setData] = useState([]);

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
      axios.get("https://visualup.koreacentral.cloudapp.azure.com/login", headers)
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

  function displayBTN(key){
    let type;
    let typeString;
    let logo;

    switch(key){
      case "google":
        type = "google-btn"; 
        logo = <GoogleOutlined className="login-img"/>
        typeString = "구글 아이디로 로그인";
        break;
      case "github":
        type = "sns-btn";  
        logo = <GlobalOutlined className="login-img"/>;   
        typeString = "SNS 연동하기";
        break;
          
      case "kakao": 
        type = "kakao-btn";     
        logo = <MessageFilled className="login-img"/>
        typeString = "카카오톡 아이디로 로그인";
        break;

    }
    return (
      <div>
        <Row><a href={data[key]} ><button type="button" className={type}>{logo}<p className="login-font">{typeString}</p> </button></a></Row><br/>
      </div>
    );
  }
    
    return(
        <div className="login-background">
            <a><ArrowLeftOutlined className="login-arrowLeft" style={{ fontSize: '30px'}} onClick={goBack}/></a>
            <br/><br/>
            <Col align="middle" className="login-body">
                <img src ={full_logo} className="login-logo"/>
                <div> 
                  {data.length!==0
                      ?Object.keys(data).map(key =>
                        displayBTN(key)
                      ):undefined
                  }
                </div>
            </Col>
           
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div> 
    );
}

export default Login;