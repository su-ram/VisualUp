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
        axios.get(`http://visualup.koreacentral.cloudapp.azure.com/graph/goal?goalId=${goalId}&userId=user102`, headers)
        .then((res)=>{
            if(res.data[0]!==undefined)
              setData(res.data[0]);
            console.log(res);
        })
        .catch((err)=>{
        const status = err?.response?.status;
        if (status === undefined) {
            console.dir("데이터를 불러오던 중 예기치 못한 예외가 발생하였습니다.\n" + JSON.stringify(err));
        }
        else if (status === 400) {
            console.dir("400에러");
        }
        else if (status === 401) {
            console.dir("401에러, goal이 없습니다.");
        }
        else if (status === 500) {
            console.dir("내부 서버 오류입니다. 잠시만 기다려주세요.");
        }
        });
    }

    function getGraph(){
        const type = data.template;
        const color = "black";
        switch (type) {
            case "Area": return <Area className="module-graph" style={{width: props.width+"px",height:props.height+"px"}} {...getConfig(data.dailySet, data.graphColor)} />
            case "Line": return <Line className="module-graph" style={{width: props.width+"px",height:props.height+"px"}} {...getConfig(data.dailySet, data.graphColor)} />
            case "Bar": return <Bar className="module-graph" style={{width: props.width+"px",height:props.height+"px"}} {...getConfig(data.dailySet, data.graphColor)} />
        }
    }

    function getConfig(dailySet, color) {
        const data = dailySet;
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
          },
          label:{
            visible:false
          }
        };
        return config;
    }

}
