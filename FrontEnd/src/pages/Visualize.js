import React, { useState, useEffect, Fragment } from 'react';
import { PageHeader } from '../components';
import { Area, Line, Bar } from '@ant-design/charts';
import { Col, DatePicker, Tabs, Button } from 'antd';
import { CalendarOutlined, RightOutlined, SettingFilled } from '@ant-design/icons';
import moment from 'moment';
import "./Visualize.css";
import { getIcon } from '../components/Icon';

const { TabPane } = Tabs;

function Visualize() {
  const range = 0.6; // 나중에 비율 조정
  const [name, setName] = useState("");
  const [dataSet, setDataSet] = useState({});
  const [graphDate, setGraphDate] = useState(undefined);
  const [graphRate, setGraphRate] = useState(1 - range / 2);
  const [graphConfig, setGraphConfig] = useState({});

  const operations = <Button onClick={gotoGoalSet}>Add Goal</Button>;

  useEffect(() => {
    // setting 시 category가 순차적으로 나와야 함
    // 여러 데이터를 array로 받기
    getGoalDataFromDB();
  }, []);

  async function getGoalDataFromDB() {
    // db에서 해당 목표 정보 받아오기
    const dbData = {
      "userId": 1,
      "userName": "홍미주",
      "goals": [
        {
          "goalId": 1,
          "title": "목표 제목", //
          "startDate": new Date(),
          "endDate": new Date(),
          "term": 2,
          "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
          "isOpened": true,
          "target": "주기별 목표량",
          "template": "Line", //
          "graphColor": "#ade09d", //
          "dataSet":[
              {
                "date": "2018/8/1",
                "type": "coding test",
                "value": 22
              },
              {
                "date": "2018/8/2",
                "type": "coding test",
                "value": 20
              },
              {
                "date": "2018/8/3",
                "type": "coding test",
                "value": 29
              },
              {
                "date": "2018/8/4",
                "type": "coding test",
                "value": 45
              },
              {
                "date": "2018/8/5",
                "type": "coding test",
                "value": 82
              },
              {
                "date": "2018/8/6",
                "type": "coding test",
                "value": 20
              },
              {
                "date": "2018/8/7",
                "type": "coding test",
                "value": 19
              },
              {
                "date": "2018/8/8",
                "type": "coding test",
                "value": 23
              },
              {
                "date": "2018/8/9",
                "type": "coding test",
                "value": 29
              },
              {
                "date": "2018/8/10",
                "type": "coding test",
                "value": 67
              },
              {
                "date": "2018/8/11",
                "type": "coding test",
                "value": 31
              },
              {
                "date": "2018/8/12",
                "type": "coding test",
                "value": 34
              },
              {
                "date": "2018/8/13",
                "type": "coding test",
                "value": 28
              },
              {
                "date": "2018/8/14",
                "type": "coding test",
                "value": 47
              },
              {
                "date": "2018/8/15",
                "type": "coding test",
                "value": 43
              }
            ], //
          "dailyData": [
            {
              "dailyId": 1,
              "todayDate": new Date(),
              "isDone": true,
              "WhatIdone": "오늘 한 일",
              "stars": 5,
            }
          ]
        },{
          "goalId": 2,
          "title": "목표 제목2", //
          "startDate": new Date(),
          "endDate": new Date(),
          "term": 2,
          "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
          "isOpened": true,
          "target": "주기별 목표량",
          "template": "Bar", //
          "graphColor": "#e09da4", //
          "dataSet":[
            {
              "date": "2018/8/1",
              "type": "git commit",
              "value": 46
            },
            {
              "date": "2018/8/2",
              "type": "git commit",
              "value": 61
            },
            {
              "date": "2018/8/3",
              "type": "git commit",
              "value": 50
            },
            {
              "date": "2018/8/4",
              "type": "git commit",
              "value": 62
            },
            {
              "date": "2018/8/5",
              "type": "git commit",
              "value": 64
            },
            {
              "date": "2018/8/6",
              "type": "git commit",
              "value": 18
            },
            {
              "date": "2018/8/7",
              "type": "git commit",
              "value": 42
            },
            {
              "date": "2018/8/8",
              "type": "git commit",
              "value": 29
            },
            {
              "date": "2018/8/9",
              "type": "git commit",
              "value": 38
            },
            {
              "date": "2018/8/10",
              "type": "git commit",
              "value": 36
            },
            {
              "date": "2018/8/11",
              "type": "git commit",
              "value": 43
            },
            {
              "date": "2018/8/12",
              "type": "git commit",
              "value": 41
            },
            {
              "date": "2018/8/13",
              "type": "git commit",
              "value": 64
            },
            {
              "date": "2018/8/14",
              "type": "git commit",
              "value": 16
            },
            {
              "date": "2018/8/15",
              "type": "git commit",
              "value": 44
            }
          ], //
          "dailyData": [
            {
              "dailyId": 1,
              "todayDate": new Date(),
              "isDone": true,
              "WhatIdone": "오늘 한 일",
              "stars": 4,
            }
          ]
        }
      ]
    }

    const tmpConfig = {};
    const tmpData = {"group": []};

    await dbData.goals.map((goal)=>{
      tmpConfig[goal.title]={
        "template" : goal.template,
        "graphColor" : goal.graphColor
      };
      tmpData[goal.title]=goal.dataSet;
      goal.dataSet.map((data)=>{
        tmpData["group"].push(data);
      })
    })
    tmpConfig["group"] = {
      "template" : "Area",
      "graphColor" : ["#e09da4","#ade09d","#9db8e0"],
    }

    // 개별 graph setting
    await setName(dbData.userName);
    await setGraphConfig(tmpConfig);
    await setDataSet(tmpData);

  }

  useEffect(() => { // 데이터 중, 가장 큰 날짜 구하기 => default 세팅
    function defaultGroupDate() {
      if (Object.keys(dataSet).length > 0) {
        const arr = dataSet["group"];
        setGraphDate(arr[arr.length - 1].date);
      }
    }
    defaultGroupDate();
  }, [dataSet]);

  function selectGraphDate(timeString) {
    // datepicker에서 고른 날짜를 전체 기간의 %로 환산하여 표현 
    // => 아래의 slider를 표현하기 위함

    if (timeString === null) { // 날짜를 삭제해도 기존 날짜로 유지
      return;
    }
    const selDate = new Date(timeString);
    const groupData = dataSet["group"];
    const firstDate = groupData[0].date;
    const firstDateNum = new Date(firstDate);
    const lastDate = groupData[groupData.length - 1].date;
    const lastDateNum = new Date(lastDate);

    const wholeDateLength = lastDateNum - firstDateNum;
    const selDateLength = selDate - firstDateNum;

    if (wholeDateLength < selDateLength) { // 선택된 날짜가 마지막 날짜 이후라면
      alert(`마지막 기록 날짜(${lastDate}) 이전의 날짜를 선택해주세요.`);
      return;
    }
    if (selDateLength < 0) {
      alert(`첫 기록 날짜(${firstDate}) 이후의 날짜를 선택해주세요.`);
      return;
    }

    setGraphDate(selDate);
    setGraphRate(parseFloat((selDateLength / wholeDateLength).toFixed(2))); // %로 나타내기
  }

  function gotoGoalSet() { // add goal 버튼 클릭 시
    window.location.href = "/GoalSet";
  }

  function getConfig(title) {
    const data = dataSet[title];
    const config = {
      data, // 이름이 무조건 data여야함
      //width: '100',
      xField: 'date', // xfield에 적용할 변수
      yField: 'value', // yfield에 적용할 변수
      forceFit: true,
      color: graphConfig[title].graphColor, // 선 색깔 지정
      seriesField: 'type', // 클릭 시 해당 그래프만 나타남
      legend: {
        visible: true,
        position: 'bottom-left',
      },
      xAxis: {
        type: 'dateTime', // x축 표시 형식
        tickCount: 10, // 몇 조각으로 나눌 건지
      },
      yAxis: { formatter: (v) => `${v}%` }, // y축 표시 형식
      interactions: [
        {
          type: 'slider',
          cfg: {
            start: graphRate - range / 2,
            end: graphRate + range / 2,
          },
        },
      ],
      label: {
        visible: true,
        type: 'line',
      },
      point: {
        visible: true,
        size: 3,
        shape: 'circle',
        style: {
          fill: 'transparent',
          stroke: 'white',
          lineWidth: 2,
        },
      },
      //smooth: true, // 그래프 부드럽게
    };
    return config;
  }

  function renderGraph(title) {
    const type = graphConfig[title].template;
    switch (type) {
      case "Area": return <Area {...getConfig(title)} />
      case "Line": return <Line {...getConfig(title)} />
      case "Bar": return <Bar {...getConfig(title)} />
    }
  }

  return (
    <Col>
      <PageHeader
        title={name + "님의 목표 달성률"}
        subtitle="목표 달성치를 그래프로 한 눈에 볼 수 있어요."
      />
      <Col className="graph-con">
        <div className="graph-header">
          <div className="select-date-con">
            <div className="date-title"><CalendarOutlined /><p>날짜 선택</p></div>
            <div className="date-select">
              {graphDate !== undefined ? <DatePicker defaultValue={moment(graphDate)} onChange={selectGraphDate} /> : "로딩중입니다..."}
            </div>
          </div>
          <Tabs defaultActiveKey="1" className="graph-tab-con" tabBarExtraContent={operations}>
            {
              Object.keys(dataSet).length>0?
                Object.keys(dataSet).map((title, index)=>
                  <TabPane tab={title} key={index}>
                    <div className="visual-graph-con">
                      {renderGraph(title)}
                      {title!=="group"?
                        <React.Fragment>
                          <span className="dailycheck-btn">{getIcon("rightOutlined")}</span>
                          <span className="setting-btn"><SettingFilled /></span>
                        </React.Fragment>
                        :undefined
                      }
                    </div>
                  </TabPane>
                ):"로딩중입니다..."
            }
          </Tabs>
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;