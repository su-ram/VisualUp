import React, { useState, useEffect } from 'react';
import { PageHeader, Graph } from '../components';
import { Col, DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import "./Visualize.css";
import axios from "axios";


function Visualize() {
  // db와 연동되는 api는 이곳에서 => data 다루는 곳

  const [name, setName] = useState("");
  const [dataSet, setDataSet] = useState([]);
  const [dailySet, setDailySet] = useState([]);
  const [graphDate, setGraphDate] = useState("");
  const [selectedGoalIdx, setSelGoalIdx] = useState(0);
  const [graphRate, setGraphRate] = useState(1);

  useEffect(() => {
    // 여러 데이터를 array로 받기
    getDataFromDB();
  },[]);

  useEffect(()=>{
    // tab 클릭 시 마다 마지막 날짜로 이동
    // 이렇게 안하면, tab 변경했을 때, 기간 제대로 설정하라는 alert가 뜸

    if(dataSet.length>0)
      setGraphDate(dataSet[selectedGoalIdx].endDate);

  },[selectedGoalIdx]);

  useEffect(()=>{
    // 날짜가 바뀌었을 때 rate 다시 계산

    calGraphRate();
  },[graphDate]);

  function getDataFromDB() {
    // db에서 해당 목표 정보 받아오기
    var headers = {
      'Access-Control-Allow-Origin': '*',        
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.get("visualup.koreacentral.cloudapp.azure.com:8080/graph?userId=user103", headers)
    .then((res)=>{
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
          "hashtags": "coding, commit, python, os",
          "open": true,
          "template": "Line",
          "graphColor": "#FF6B29",
          "dailys": [
            {
              "date": "2020-10-22",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020-10-27",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            },
            {
              "date": "2020-11-01",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020-11-06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020-11-11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-11-16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020-11-21",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-11-26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            },
            {
              "date": "2020-12-01",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020-12-06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 80
            },
            {
              "date": "2020-12-11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020-12-16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-12-21",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020-12-26",
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
          "hashtags": "coding, commit, js, web",
          "open": true,
          "template": "Line",
          "graphColor": "#4EE23E",
          "dailys": [
            {
              "date": "2020-10-11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-10-17",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020-10-27",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020-11-06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020-11-16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-11-26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020-12-06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 80
            },
            {
              "date": "2020-12-16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020-12-26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            }
          ]
        }
        ,{
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
          "dailys": [
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
        }
      ]
    };

    const a = processDataToStore(dbData);
  }

  async function processDataToStore(dbData){
    const tmpData = [{}];
    const tmpDaily = [{"title":"group"}]; // 기본 data와 index를 맞추기 위해 하나 넣어두기
    const tmpGData = [];
    const tmpGroupColor = [];
    let minStartDate = dbData.goals[0].startDate; let maxEndDate =dbData.goals[0].endDate;

    const a = await dbData.goals.map(async (goal, index) => {
      // db에서 불러온 data에서 필요한 정보 추출
      const a = tmpData.push({ // 기본 data 넣기
        "goalId" : goal.goalId,
        "title" : goal.title,
        "startDate" : goal.dailys[0].date,
        "endDate" : goal.dailys[goal.dailys.length-1].date,
        "template": goal.template,
        "graphColor": goal.graphColor,
        "dataSet" : [] 
      });
      const b = tmpDaily.push({ // daily data 넣기
        "title" : goal.title,
        "dailys": goal.dailys,
        "termGoal" : goal.termGoal,
        "term" : goal.term,
        "hashtags" : goal.hashtags
      });

      await a; await b;

      goal.dailys.map((daily, index2)=>{ // 기본 data에 그래프 data 넣기
        tmpData[index+1].dataSet.push({ // 개별 그래프 data
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
      tmpGroupColor.push(goal.graphColor); // 그룹 색 지정

      if(Date.parse(minStartDate)>Date.parse(goal.startDate)){
        minStartDate = goal.startDate;
      }
      if(Date.parse(maxEndDate)<Date.parse(goal.endDate)){
        maxEndDate = goal.endDate;
      }
    });
    await a;

    // 기본 data의 앞부분에 그룹 data 넣기
    tmpData[0] = {
      "title" : "group",
      "startDate" : minStartDate,
      "endDate" : maxEndDate,
      "template": "Area",
      "graphColor": tmpGroupColor,
      "dataSet": tmpGData
    };

    setName(dbData.userName); // name setting
    const c = setDataSet(tmpData); // 개별 graph setting
    const d = setDailySet(tmpDaily); // daily data setting
    await c; await d;

    setGraphDate(maxEndDate); // graph 표시할 날짜 가장 마지막 날짜로 setting
  }

  function selectGraphDate(time, timeString) {
    if (time === null) { // 날짜를 삭제해도 기존 날짜로 유지
      return;
    }

    const selDate = timeString;
    setGraphDate(selDate);
  }

  function calGraphRate(){
    // datepicker에서 고른 날짜를 전체 기간의 %로 환산하여 표현 
    // => 아래의 slider를 표현하기 위함

    if(dataSet.length===0) // 첫 setting 후 진행
      return;

    const selDate = graphDate;

    const start = dataSet[selectedGoalIdx].startDate;
    const end = dataSet[selectedGoalIdx].endDate;
    const length = Date.parse(end)-Date.parse(start);
    const selLength = Date.parse(selDate)-Date.parse(start);

    if (selLength < 0) { // 하루 이상 차이 x
        alert(`첫 기록 날짜(${start}) 이후의 날짜를 선택해주세요.`);
        return;
    }
    if (length+1 < selLength) { // 선택된 날짜가 마지막 날짜 이후라면
        alert(`마지막 기록 날짜(${end}) 이전의 날짜를 선택해주세요.`);
        return;
    }

    setGraphRate(parseFloat((selLength / length).toFixed(2))); // %로 나타내기
  }

  function getGoalDataFromDB(){
    // goal마다 따로 받아와서 저장 => dataSet과 dailySet 업데이트 하면 됨
    // 
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
              {graphDate !== ""?<DatePicker value={moment(graphDate)} onChange={selectGraphDate} /> : "로딩중입니다..."}
            </div>
          </div> 
          {graphDate!==""?
            <Graph
              dataSet={dataSet}
              dailySet = {dailySet}
              graphDate = {graphDate}
              graphRate = {graphRate}
              setGraphDate = {setGraphDate}
              selectedGoalIdx = {selectedGoalIdx}
              setSelGoalIdx = {setSelGoalIdx}
            />
            :undefined
          } 
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;