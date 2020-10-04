import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components';
import { Area, Line, Bar } from '@ant-design/charts';
import { Col, DatePicker, Tabs, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import "./Visualize.css";

const { TabPane } = Tabs;

function Visualize() {
  const range = 0.6; // 나중에 비율 조정
  const [data, setData] = useState([]);
  const [graphDate, setGraphDate] = useState(undefined);
  const [graphRate, setGraphRate] = useState(1 - range / 2);
  const config = {
    data,
    //width: '100',
    xField: 'date', // xfield에 적용할 변수
    yField: 'value', // yfield에 적용할 변수
    forceFit: true,
    color: ['#E9BE78', '#6a93c5', '#6ac593'], // 선 색깔 지정
    seriesField: 'type', // 클릭 시 해당 그래프만 나타남
    legend: {
      //visible: false,
      //legend: { position: 'bottom-left' },
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

  const name = "홍미주";
  const operations = <Button onClick={gotoGoalSet}>Add Goal</Button>;

  useEffect(() => {
    function defaultSetting() {
      // setting 시 category가 순차적으로 나와야 함
      // 여러 데이터를 array로 받기
      setData(
        [
          {
            "date": "2018/8/1",
            "type": "download",
            "value": 46
          },
          {
            "date": "2018/8/1",
            "type": "register",
            "value": 22
          },
          {
            "date": "2018/8/1",
            "type": "bill",
            "value": 18
          },
          {
            "date": "2018/8/2",
            "type": "download",
            "value": 61
          },
          {
            "date": "2018/8/2",
            "type": "register",
            "value": 20
          },
          {
            "date": "2018/8/2",
            "type": "bill",
            "value": 25
          },
          {
            "date": "2018/8/3",
            "type": "download",
            "value": 50
          },
          {
            "date": "2018/8/3",
            "type": "register",
            "value": 29
          },
          {
            "date": "2018/8/3",
            "type": "bill",
            "value": 28
          },
          {
            "date": "2018/8/4",
            "type": "download",
            "value": 62
          },
          {
            "date": "2018/8/4",
            "type": "register",
            "value": 45
          },
          {
            "date": "2018/8/4",
            "type": "bill",
            "value": 42
          },
          {
            "date": "2018/8/5",
            "type": "download",
            "value": 64
          },
          {
            "date": "2018/8/5",
            "type": "register",
            "value": 82
          },
          {
            "date": "2018/8/5",
            "type": "bill",
            "value": 61
          },
          {
            "date": "2018/8/6",
            "type": "download",
            "value": 18
          },
          {
            "date": "2018/8/6",
            "type": "register",
            "value": 20
          },
          {
            "date": "2018/8/6",
            "type": "bill",
            "value": 87
          },
          {
            "date": "2018/8/7",
            "type": "download",
            "value": 42
          },
          {
            "date": "2018/8/7",
            "type": "register",
            "value": 19
          },
          {
            "date": "2018/8/7",
            "type": "bill",
            "value": 70
          },
          {
            "date": "2018/8/8",
            "type": "download",
            "value": 29
          },
          {
            "date": "2018/8/8",
            "type": "register",
            "value": 23
          },
          {
            "date": "2018/8/8",
            "type": "bill",
            "value": 38
          },
          {
            "date": "2018/8/9",
            "type": "download",
            "value": 38
          },
          {
            "date": "2018/8/9",
            "type": "register",
            "value": 29
          },
          {
            "date": "2018/8/9",
            "type": "bill",
            "value": 48
          },
          {
            "date": "2018/8/10",
            "type": "download",
            "value": 36
          },
          {
            "date": "2018/8/10",
            "type": "register",
            "value": 67
          },
          {
            "date": "2018/8/10",
            "type": "bill",
            "value": 50
          },
          {
            "date": "2018/8/11",
            "type": "download",
            "value": 43
          },
          {
            "date": "2018/8/11",
            "type": "register",
            "value": 31
          },
          {
            "date": "2018/8/11",
            "type": "bill",
            "value": 54
          },
          {
            "date": "2018/8/12",
            "type": "download",
            "value": 41
          },
          {
            "date": "2018/8/12",
            "type": "register",
            "value": 34
          },
          {
            "date": "2018/8/12",
            "type": "bill",
            "value": 45
          },
          {
            "date": "2018/8/13",
            "type": "download",
            "value": 64
          },
          {
            "date": "2018/8/13",
            "type": "register",
            "value": 28
          },
          {
            "date": "2018/8/13",
            "type": "bill",
            "value": 68
          },
          {
            "date": "2018/8/14",
            "type": "download",
            "value": 16
          },
          {
            "date": "2018/8/14",
            "type": "register",
            "value": 47
          },
          {
            "date": "2018/8/14",
            "type": "bill",
            "value": 28
          },
          {
            "date": "2018/8/15",
            "type": "download",
            "value": 44
          },
          {
            "date": "2018/8/15",
            "type": "register",
            "value": 43
          },
          {
            "date": "2018/8/15",
            "type": "bill",
            "value": 17
          }
        ]);
    }
    defaultSetting();
  }, []);

  /* 그룹 데이터 들어왔을 때, 가장 큰 날짜 구하기
  useEffect(()=>{
    if(data.length>0){
      let maxDate = 0;
      data.map((d)=>{
        const partialMax = Date.parse(d[d.length-1].date);
        if(d.length>0 && partialMax>maxDate){
          maxDate = partialMax;
        }
      });
      setGraphDate(maxDate);
    }
  },[data]);
  */

  useEffect(() => {
    if (data.length > 0) {
      setGraphDate(data[data.length - 1].date);
    }
  }, [data])

  function selectGraphDate(timeString) {
    if (timeString === null) { // 날짜를 삭제해도 기존 날짜로 유지
      return;
    }
    const selDate = new Date(timeString);
    const firstDateNum = new Date(data[0].date);
    const lastDateNum = new Date(data[data.length - 1].date);

    const wholeDateLength = lastDateNum - firstDateNum;
    const selDateLength = selDate - firstDateNum;
    setGraphDate(selDate);
    setGraphRate(parseFloat((selDateLength / wholeDateLength).toFixed(1))); // %로 나타내기
  }

  function gotoGoalSet() {
    console.log("Hi");
    window.location.href = "/GoalSet";
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
              {graphDate !== undefined ? <DatePicker defaultValue={moment(graphDate)} onChange={selectGraphDate} /> : "ㄱㄷ"}
            </div>
          </div>
          <Tabs defaultActiveKey="1" className="graph-tab-con" tabBarExtraContent={operations}>
            <TabPane tab="Area" key="1">
              <div>
                {data.length !== 0 ? <Area {...config} /> : undefined}
              </div>
            </TabPane>
            <TabPane tab="Line" key="2">
              <div>
                {data.length !== 0 ? <Line {...config} /> : undefined}
              </div>
            </TabPane>
            <TabPane tab="Bar" key="3">
              <div>
                {data.length !== 0 ? <Bar {...config} /> : undefined}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;