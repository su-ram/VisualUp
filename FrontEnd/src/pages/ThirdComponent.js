import React, { useState, useEffect } from "react";
import { PageHeader } from '../components';
import Slider from "react-slick";
import "./ThirdComponent.css";
import BGimg from "../../src/img/BGimg.png"
import { Area, Line, Bar } from '@ant-design/charts';
import axios from "axios";
import { DownArrow } from '../components';


export default function ThirdComponent() {
    const [goalId, setGoalID] = useState("");
    const [data, setData] = useState({});
    const goalIdNum = 104;

    useEffect(()=>{
      setGoalID(goalIdNum);
      console.log(goalIdNum);
  },[goalIdNum]);
/*
  useEffect(()=>{
    getGoalDataFromDB(goalId);
}, [goalId]);

/*
      function getGoalDataFromDB(goalId){

      setData(
        {
          "goalId": "goal124",
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
              "value": 40
            },
            {
              "date": "2020-10-05",
              "whatIDone": "Chapter 3 clear",
              "value": 80
            },
            {
              "date": "2020-10-07",
              "whatIDone": "Chapter 4 clear",
              "value": 100
            },
            {
              "date": "2020-10-9",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-10-11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            }
          ]
        },
        {
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
    */

   const data1 =
    {
      "goalId": "goal124",
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
          "value": 40
        },
        {
          "date": "2020-10-05",
          "whatIDone": "Chapter 3 clear",
          "value": 80
        },
        {
          "date": "2020-10-07",
          "whatIDone": "Chapter 4 clear",
          "value": 100
        },
        {
          "date": "2020-10-9",
          "whatIDone": "예제 문제 2개 코드로 구현하기",
          "value": 20
        },
        {
          "date": "2020-10-11",
          "whatIDone": "예제 문제 2개 코드로 구현하기",
          "value": 60
        }
      ]
    };

    const data2 = 
    {
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
      },
      {
        "date": "2020-10-13",
        "whatIDone": "예제 문제 2개 코드로 구현하기",
        "value": 80
      },
      {
        "date": "2020-10-15",
        "whatIDone": "예제 문제 2개 코드로 구현하기",
        "value": 40
      }
    ] 
  };

  const data3 = 
  {
  "goalId": "goal126",
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
      "value": 20
    },
    {
      "date": "2020-10-03",
      "whatIDone": "Chapter 2 clear",
      "value": 0
    },
    {
      "date": "2020-10-05",
      "whatIDone": "Chapter 3 clear",
      "value": 60
    },
    {
      "date": "2020-10-07",
      "whatIDone": "Chapter 4 clear",
      "value": 100
    },
    {
      "date": "2020-10-9",
      "whatIDone": "예제 문제 2개 코드로 구현하기",
      "value": 80
    },
    {
      "date": "2020-10-11",
      "whatIDone": "예제 문제 2개 코드로 구현하기",
      "value": 60
    }
    ,
    {
      "date": "2020-10-13",
      "whatIDone": "예제 문제 2개 코드로 구현하기",
      "value": 80
    }
  ] 
};


      function getGraph(name){
        const type = name.template;
        const color = `#${ Math.random().toString(16).substr(-6)}`;
        switch (type) {
            case "Area": return <Area className="module-graph" style={{width: "100px",height:"100px"}} {...getConfig(name.dailySet, color)} />
            case "Line": return <Line className="module-graph" style={{width: "100px",height:"100px"}} {...getConfig(name.dailySet, color)} />
            case "Bar": return <Bar className="module-graph" style={{width: "100px",height:"100px"}} {...getConfig(name.dailySet, color)} />
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
                <div>{getGraph(data1)}</div>
                <div className ="third-name">홍미주님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{getGraph(data2)}</div>
                <div className ="third-name">김수람님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{getGraph(data3)}</div>
                <div className ="third-name">이소정님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{getGraph(data1)}</div>
                <div className ="third-name">우희은님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{getGraph(data2)}</div>
                <div className ="third-name">박미현님</div>
              </div>
            </div>
            <div className="card-container">
            <div className = "card-container-box">
                <div>{getGraph(data3)}</div>
                <div className ="third-name">김서현님</div>
              </div>
            </div>
          </Slider>
        </div>
        <img className = "bg-img"src = {BGimg} />
        <DownArrow>

        </DownArrow>

      </div>
    );
  }
