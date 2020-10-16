import React, { useState, useEffect } from 'react';
import { Area, Line, Bar } from '@ant-design/charts';
import "./MakeGraph.css";
import axios from "axios";

export default function MakeGraph(props){
    const [goalId, setGoalID] = useState("");
    const [data, setData] = useState({});

    useEffect(()=>{
        setGoalID(props.goalId);
        console.log(props.goalId);
    },[props.goalId]);

    useEffect(()=>{
        getGoalDataFromDB(goalId);
    }, [goalId]);

    return (
        <div>
            {Object.keys(data).length!==0?getGraph():undefined}
        </div>
    );
    
    function getGoalDataFromDB(goalId){
        // goal마다 따로 받아와서 저장 => dataSet과 dailySet 업데이트 하면 됨
        const headers = {
        'Access-Control-Allow-Origin': '*',        
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        }
        axios.get(`http://visualup.koreacentral.cloudapp.azure.com/graph/goal?goalId=${goalId}`, headers)
        .then((res)=>{
            setData(res.data[0]);
            console.log(res);
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
        });
/*
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
          });*/
    }

    function getGraph(){
        const type = data.template;
        const color = "black";
        switch (type) {
            case "Area": return <Area className="module-graph" style={{width: props.width+"px",height:props.height+"px"}} {...getConfig(data.dailySet, color)} />
            case "Line": return <Line className="module-graph" style={{width: props.width+"px",height:props.height+"px"}} {...getConfig(data.dailySet, color)} />
            case "Bar": return <Bar className="module-graph" style={{width: props.width+"px",height:props.height+"px"}} {...getConfig(data.dailySet, color)} />
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

}
