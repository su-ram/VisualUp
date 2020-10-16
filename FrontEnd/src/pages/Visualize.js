import React, { useState, useEffect } from 'react';
import { PageHeader, Graph } from '../components';
import { Col, DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import "./Visualize.css";
import axios from "axios";


function Visualize({match}) {
  // db와 연동되는 api는 이곳에서 => data 다루는 곳

  const [dbData, setDBdata] = useState({});
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
    if(match.params.goalIdx!==undefined)
      setSelGoalIdx(match.params.goalIdx);
  },[match.params.goalIdx])

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

  useEffect(()=>{
    if(Object.keys(dbData).length!==0)
      processDataToStore();
  },[dbData]);

  function getDataFromDB() {
    // db에서 해당 목표 정보 받아오기
    const headers = {
      'Access-Control-Allow-Origin': '*',        
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.get("https://virtserver.swaggerhub.com/VisualUp/VisualUp_Api/1.0.0/graph?userId=user103", headers)
    .then((res)=>{
      setDBdata(res.data);
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
    setDBdata({
      "userId": "user101",
      "userName": "김수람",
      "goals": [
        {
          "goalId": "goal101",
          "title": "python",
          "startDate": "2020-10-02",
          "endDate": "2020-12-31",
          "termGoal": "예제 문제 1개씩 코드로 구현하기",
          "term": 5,
          "hashtags": "coding, commit, python, os",
          "open": true,
          "template": "Line",
          "graphColor": "#FF6B29",
          "dailySet": [
            {
              "date": "2020-10-02",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020-10-7",
              "whatIDone": "예제 문제 3개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020-10-12",
              "whatIDone": "예제 문제 1개 코드로 구현 실패..",
              "value": 20
            },
            {
              "date": "2020-10-17",
              "whatIDone": "시간이 없어서 못함",
              "value": 0
            }
          ]
        }
        ,{
          "goalId": "goal102",
          "title": "nodejs",
          "startDate": "2020-08-02",
          "endDate": "2020-10-17",
          "termGoal": "토이 프로젝트 1개씩",
          "term": 10,
          "hashtags": "coding, commit, js, web",
          "open": true,
          "template": "Line",
          "graphColor": "#4EE23E",
          "dailySet": [
            {
              "date": "2020-08-02",
              "whatIDone": "토이 프로젝트 시작",
              "value": 20
            },
            {
              "date": "2020-08-12",
              "whatIDone": "첫번째 토이 프로젝트 완성",
              "value": 100
            },
            {
              "date": "2020-08-22",
              "whatIDone": "두번째 토이 프로젝트 완성 (하지만 별로 맘에 안듬)",
              "value": 80
            },
            {
              "date": "2020-09-01",
              "whatIDone": "세번째 토이 프로젝트 50%",
              "value": 20
            },
            {
              "date": "2020-09-11",
              "whatIDone": "세번째 토이 프로젝트 80% (시간이 없음)",
              "value": 40
            },
            {
              "date": "2020-09-21",
              "whatIDone": "시간이 없음..",
              "value": 0
            },
            {
              "date": "2020-10-01",
              "whatIDone": "세번째 토이 프로젝트 완성 (만족)",
              "value": 100
            },
            {
              "date": "2020-10-11",
              "whatIDone": "네번째 토이 프로젝트 시작",
              "value": 60
            },
            {
              "date": "2020-10-17",
              "whatIDone": "",
              "value": 0
            }
          ]
        }
        ,{
          "goalId": "goal103",
          "title": "typescript",
          "startDate": "2020-10-01",
          "endDate": "2020-10-17",
          "termGoal": "패스트캠퍼스 1 chapter씩",
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
              "value": 100
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
              "date": "2020-10-09",
              "whatIDone": "이해 안돼서 Chapter 4 다시 보기",
              "value": 40
            },
            {
              "date": "2020-10-11",
              "whatIDone": "Chapter 5 clear",
              "value": 60
            },
            {
              "date": "2020-10-13",
              "whatIDone": "으... 바빠서 못했음",
              "value": 0
            },
            {
              "date": "2020-10-15",
              "whatIDone": "Chapter 6 clear (다시 봐야할 듯)",
              "value": 60
            },
            {
              "date": "2020-10-17",
              "whatIDone": "",
              "value": 0
            }
          ]
        }
      ]
    });
    */
  }

  async function processDataToStore(){
    const tmpData = [{}];
    const tmpDaily = [{"title":"group"}]; // 기본 data와 index를 맞추기 위해 하나 넣어두기
    const tmpGData = [];
    const tmpGroupColor = [];
    let minStartDate = dbData.goals[0].startDate; let maxEndDate =dbData.goals[0].endDate;

    const a = dbData.goals.map((goal, index) => {
      // db에서 불러온 data에서 필요한 정보 추출
      console.log(goal);
      const graphColor = goal.graphColor==null?"#5D4215":goal.graphColor;

      tmpData.push({ // 기본 data 넣기
        "goalId" : goal.goalId,
        "title" : goal.title,
        "startDate" : dailySet.length!==0?goal.dailySet[0].date:"2020-10-17",
        "endDate" : dailySet.length!==0?goal.dailySet[goal.dailySet.length-1].date:"2020-10-17",
        "template": goal.template,
        "graphColor": graphColor,
        "dataSet" : [] 
      });
      tmpDaily.push({ // daily data 넣기
        "title" : goal.title,
        "dailys": goal.dailySet,
        "termGoal" : goal.termGoal,
        "term" : goal.term,
        "hashtags" : goal.hashtags
      });

      goal.dailySet.map((daily, index2)=>{ // 기본 data에 그래프 data 넣기
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
      tmpGroupColor.push(graphColor); // 그룹 색 지정

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

    await setName(dbData.userName); // name setting
    await setDailySet(tmpDaily); // daily data setting
    await setDataSet(tmpData); // 개별 graph setting

    await setGraphDate(maxEndDate); // graph 표시할 날짜 가장 마지막 날짜로 setting
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

    const start = dataSet[0].startDate;
    const end = dataSet[0].endDate;
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

  function getGoalDataFromDB(idx){
    // goal마다 따로 받아와서 저장 => dataSet과 dailySet 업데이트 하면 됨
    console.log(dbData.goals[idx-1].goalId); // group은 idx에서 빼야함

    const headers = {
      'Access-Control-Allow-Origin': '*',        
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    axios.get(`http://visualup.koreacentral.cloudapp.azure.com/graph/goal?goalId=${dbData.goals[idx-1].goalId}&userId=user102`, headers)
    .then((res)=>{
      let tmpDB = dbData;
      tmpDB.goals[idx-1]=res.data[0];
      setDBdata(tmpDB);
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
              getGoalDataFromDB = {getGoalDataFromDB}
            />
            :undefined
          } 
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;