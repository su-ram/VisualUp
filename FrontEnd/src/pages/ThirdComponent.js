import React, { useState, useEffect } from "react";
import { PageHeader } from '../components';
import Slider from "react-slick";
import "./ThirdComponent.css";
import BGimg from "../../src/img/BGimg.png"
import { Area, Line, Bar } from '@ant-design/charts';
import axios from "axios";

export default function ThirdComponent() {
    const [goalId, setGoalID] = useState("");
    const [data, setData] = useState({});
    const goalIdNum = 104;

    
    // useEffect(()=>{
    //     setGoalID(props.goalId);
    //     console.log(props.goalId);
    // },[props.goalId]);

    useEffect(()=>{
      setGoalID(goalIdNum);
      console.log(goalIdNum);
  },[goalIdNum]);

    useEffect(()=>{
        getGoalDataFromDB(goalId);
    }, [goalId]);
  
    function getGoalDataFromDB(goalId){
      // goal마다 따로 받아와서 저장 => dataSet과 dailySet 업데이트 하면 됨

      console.log("graph = "+goalId);
/*
      const headers = {
      'Access-Control-Allow-Origin': '*',        
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      }
      axios.get(`https://virtserver.swaggerhub.com/VisualUp/VisualUp_Api/1.0.0/graph/goal?goalId=${goalId}`, headers)
      .then((res)=>{
          setData(res.data[0]);
      })
      .catch((err)=>{
      const status = err?.response?.status;
      if (status === undefined) {
          console.dir("데이터를 불러오던 중 예기치 못한 예외가 발생하였습니다.\n" + JSON.stringify(err));
      }
      else if (status === 400) {
          alert("");
          console.dir("400에러");
      }
      else if (status === 500) {
          console.dir("내부 서버 오류입니다. 잠시만 기다려주세요.");
      }
      }); */

      setData({
        "goalId": "goal125",
        "title": "typescript",
        "startDate": "2020-10-01",
        "endDate": "2020-12-31",
        "termGoal": "1 chapter씩",
        "term": 2,
        "hashtags": "coding, commit, js, web, typescript",
        "open": true,
        "template": "Line",
        "graphColor": "#41A0FF",
        "dailySet": [
          {
            "date": "2020-10-01",
            "whatIDone": "Chapter 1 clear",
            "value": 100
          },
          {
            "date": "2020-10-03",
            "whatIDone": "Chapter 2 clear",
            "value": 20
          },
          {
            "date": "2020-10-05",
            "whatIDone": "Chapter 3 clear",
            "value": 80
          },
          {
            "date": "2020-10-07",
            "whatIDone": "Chapter 4 clear",
            "value": 20
          },
          {
            "date": "2020-10-9",
            "whatIDone": "예제 문제 2개 코드로 구현하기",
            "value": 0
          },
          {
            "date": "2020-10-11",
            "whatIDone": "예제 문제 2개 코드로 구현하기",
            "value": 60
          }
        ]
      });
    }

      function getGraph(){
        const type = data.template;
        const color = "black";
        switch (type) {
            case "Area": return <Area className="module-graph" style={{width: "150px",height:"150px"}} {...getConfig(data.dailySet, color)} />
            case "Line": return <Line className="module-graph" style={{width: "150px",height:"150px"}} {...getConfig(data.dailySet, color)} />
            case "Bar": return <Bar className="module-graph" style={{width: "150px",height:"150px"}} {...getConfig(data.dailySet, color)} />
        }
    }


    function getConfig(dailySet, color) {
        const data = dailySet;
        console.log(data);
        const config = {
          data, // 이름이 무조건 data여야함
          xField: 'date', // xfield에 적용할 변수
          yField: 'value', // yfield에 적용할 변수
          forceFit: true,
          color: color, // 선 색깔 지정
          xAxis: {
            type: 'dateTime', // x축 표시 형식
          },
          yAxis: { formatter: (v) => `${v}%` }, // y축 표시 형식
          point: {
            visible: true,
            size: 3,
            shape: 'circle',
            style: {
              fill: '#5D4215',
              stroke: 'white',
              lineWidth: 2,
            },
          }
        };
        return config;
    }


    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    return (
      <div className="components third-component">
        <div className= "third-component-text">
          <PageHeader
              title="다른 사용자들과 목표 현황을 공유하세요."
              subtitle="해시태그 기능을 통해 서로의 현황을 공유할 수 있어요."
            />
        </div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          
        <div className="slider">
        <Slider {...settings}>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{Object.keys(data).length!==0?getGraph():undefined}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{Object.keys(data).length!==0?getGraph():undefined}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{Object.keys(data).length!==0?getGraph():undefined}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{Object.keys(data).length!==0?getGraph():undefined}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{Object.keys(data).length!==0?getGraph():undefined}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{Object.keys(data).length!==0?getGraph():undefined}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
          </Slider>
        </div>
        <img className = "bg-img"src = {BGimg} />
      </div>
    );
  }
