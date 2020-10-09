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
  const [graphDate, setGraphDate] = useState("");

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
          "goalId": "goal123",
          "title": "python",
          "startDate": "2020-10-22",
          "endDate": "2020-12-31",
          "termGoal": "예제 문제 1개씩 코드로 구현하기",
          "term": 5,
          "hastags": "coding, commit, python, os",
          "open": true,
          "template": "Line",
          "graphColor": "#FF6B29",
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
              "value": 0
            },
            {
              "date": "2020/12/01",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/12/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 80
            },
            {
              "date": "2020/12/11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020/12/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/12/21",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/12/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            }
          ]
        }
        ,{
          "goalId": "goal124",
          "title": "nodejs",
          "startDate": "2020-10-07",
          "endDate": "2020-12-31",
          "termGoal": "토이 프로젝트 1개씩",
          "term": 10,
          "hastags": "coding, commit, js, web",
          "open": true,
          "template": "Line",
          "graphColor": "#4EE23E",
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
            },
            {
              "date": "2020/12/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 80
            },
            {
              "date": "2020/12/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/12/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
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
    const tmpGroupColor = [];

    let minStartDate = "2022/10/10";
    let maxEndDate = 0;

    await dbData.goals.map(async (goal, index) => {
      await tmpData.push({ // 기본 data 넣기
        "goalId" : goal.goalId,
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
      if(Date.parse(minStartDate)>Date.parse(goal.startDate)){
        minStartDate = goal.startDate;
      }
      if(Date.parse(maxEndDate)<Date.parse(goal.endDate)){
        maxEndDate = goal.endDate;
      }

      tmpGroupColor.push(goal.graphColor); // 그룹 색 지정
    });

    await setName(dbData.userName); // name setting
    await setDataSet(tmpData); // 개별 graph setting
    await setDailySet(tmpDaily); // daily data setting

    await setGDataset({
      "title" : "group",
      "startDate" : minStartDate,
      "endDate" : maxEndDate,
      "template": "Area",
      "graphColor": tmpGroupColor,
      "dataSet": tmpGData
    });
    //await putGroupGraphData(tmpData, minStartDate, maxEndDate);
    await setGraphDate(maxEndDate);
  }

  function selectGraphDate(_, timeString) {
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
        <div className="graph-con">
          <div className="select-date-con">
            <div className="date-title"><CalendarOutlined /><p>날짜 선택</p></div>
            <div className="date-select">
              {graphDate !== "" ? <DatePicker defaultValue={moment(graphDate)} onChange={selectGraphDate} /> : "로딩중입니다..."}
            </div>
          </div>    
          {graphDate!==""?
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