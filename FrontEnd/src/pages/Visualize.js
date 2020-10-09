import React, { useState, useEffect } from 'react';
import { PageHeader, Graph } from '../components';
import { Col, DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import moment, { max } from 'moment';
import "./Visualize.css";


function Visualize() {

  const [name, setName] = useState("");
  const [dataSet, setDataSet] = useState([]);
  const [dailySet, setDailySet] = useState([]);
  const [groupDataSet, setGDataset] = useState({});
  const [graphDate, setGraphDate] = useState(undefined);

  useEffect(() => {
    // setting 시 category가 순차적으로 나와야 함
    // 여러 데이터를 array로 받기
    getGoalDataFromDB();
  }, []);

  async function getGoalDataFromDB() {
    // db에서 해당 목표 정보 받아오기
    const dbData = {
      "userId": "user103",
      "userName": "김수람",
      "goals": [
        {
          "goalId": "데이터 분석을 위한 파이썬 문법 공부",
          "title": "python",
          "startDate": new Date("2020-10-22"),
          "endDate": new Date("2020-12-31"),
          "termGoal": "예제 문제 1개씩 코드로 구현하기",
          "term": 5,
          "hastags": "coding, commit, python, os",
          "open": true,
          "template": "Line",
          "graphColor": "#e09da4",
          "dailys": [
            {
              "date": "2020/10/22",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020/10/27",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            },
            {
              "date": "2020/11/01",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/11/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020/11/11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/11/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/11/21",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/11/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 10
            }
          ]
        }
        ,{
          "goalId": "웹 백엔드 Node.js 마스터",
          "title": "nodejs",
          "startDate": new Date("2020-10-07"),
          "endDate": new Date("2020-12-31"),
          "termGoal": "토이 프로젝트 1개씩",
          "term": 10,
          "hastags": "coding, commit, js, web",
          "open": true,
          "template": "Bar",
          "graphColor": "#e09da4",
          "dailys": [
            {
              "date": "2020/10/07",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/10/17",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020/10/27",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020/11/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/11/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/11/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            }
          ]
        }
      ]
    };

    await processDataToStore(dbData);

  }

  async function processDataToStore(dbData){
    const tmpData = [];
    const tmpDaily = [];
    const tmpGData = [];

    let minStartDate = Number.MAX_VALUE;
    let maxEndDate = 0;

    await dbData.goals.map(async (goal, index) => {
      await tmpData.push({ // 기본 data 넣기
        "title" : goal.title,
        "startDate" : goal.startDate,
        "endDate" : goal.endDate,
        "template": goal.template,
        "graphColor": goal.graphColor,
        "dataSet" : [] 
      });
      await tmpDaily.push({ // daily data 넣기
        "title" : goal.title,
        "dailys": goal.dailys,
        "termGoal" : goal.termGoal,
        "term" : goal.term,
        "hashtags" : goal.hashtags
      });

      await goal.dailys.map((daily, index2)=>{ // 그래프 data 넣기
        tmpData[index].dataSet.push({ // 개별 그래프 data
          "date": daily.date,
          "type": goal.title,
          "value" : daily.value
        });
        tmpGData.push({
          "date": (index2+1)+"주기",
          "type" : goal.title,
          "value": daily.value
        });
      });

      // group 그래프에 넣기 위한 startDate, endDate
      if(minStartDate>goal.startDate){
        minStartDate = goal.startDate;
      }
      if(maxEndDate<goal.endDate){
        maxEndDate = goal.endDate;
      }
    });

    await setName(dbData.userName); // name setting
    await setDataSet(tmpData); // 개별 graph setting
    await setDailySet(tmpDaily); // daily data setting

    await setGDataset({
      "title" : "group",
      "startDate" : minStartDate,
      "endDate" : maxEndDate,
      "template": "Area",
      "graphColor": ["#e09da4", "#ade09d", "#9db8e0"],
      "dataSet": tmpGData
    });
    //await putGroupGraphData(tmpData, minStartDate, maxEndDate);
    await setGraphDate(maxEndDate);
  }
/*
  function putGroupGraphData(graphData, min, max){
    const tmpGData = [];

    graphData.map((datas)=>{
      datas.map((data, index)=>{
        tmpGData.push({
          "date": index+"주기",
          "value": data.value,
          "type" : data.type
        })
      });
    })
    
    // 그룹 graph setting
    setGDataset({
      "title" : "group",
      "startDate" : min,
      "endDate" : max,
      "template": "Area",
      "graphColor": ["#e09da4", "#ade09d", "#9db8e0"],
      "dataSet": tmpGData
    });
  }
*/
  function selectGraphDate(timeString) {
    // datepicker에서 고른 날짜를 전체 기간의 %로 환산하여 표현 
    // => 아래의 slider를 표현하기 위함

    if (timeString === null) { // 날짜를 삭제해도 기존 날짜로 유지
      return;
    }

    const selDate = timeString;
    setGraphDate(selDate);
  }

  return (
    <Col>
      <PageHeader
        title={name + "님의 목표 달성률"}
        subtitle="목표 달성치를 그래프로 한 눈에 볼 수 있어요."
      />
      <Col>
        <div className="graph-con page-set">
          <div className="select-date-con">
            <div className="date-title"><CalendarOutlined /><p>날짜 선택</p></div>
            <div className="date-select">
              {graphDate !== undefined ? <DatePicker defaultValue={moment(graphDate)} onChange={selectGraphDate} /> : "로딩중입니다..."}
            </div>
          </div>    
          {graphDate!==undefined?
            <Graph
              dataSet={dataSet}
              dailySet = {dailySet}
              groupDataSet = {groupDataSet}
              graphDate = {graphDate}
            />
            :undefined
          } 
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;