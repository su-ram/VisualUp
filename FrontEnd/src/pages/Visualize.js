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
  const [dataSet, setDataSet] = useState({});
  const [graphDate, setGraphDate] = useState(undefined);
  const [graphRate, setGraphRate] = useState(1 - range / 2);

  const name = "홍미주";
  const operations = <Button onClick={gotoGoalSet}>Add Goal</Button>;

  useEffect(() => {
    function defaultSetting() {
      // setting 시 category가 순차적으로 나와야 함
      // 여러 데이터를 array로 받기
      setDataSet(
        {
          "group": [
            {
              "date": "2018/8/1",
              "type": "git commit",
              "value": 4623
            },
            {
              "date": "2018/8/1",
              "type": "coding test",
              "value": 2208
            },
            {
              "date": "2018/8/1",
              "type": "cookie project",
              "value": 182
            },
            {
              "date": "2018/8/2",
              "type": "git commit",
              "value": 6145
            },
            {
              "date": "2018/8/2",
              "type": "coding test",
              "value": 2016
            },
            {
              "date": "2018/8/2",
              "type": "cookie project",
              "value": 257
            },
            {
              "date": "2018/8/3",
              "type": "git commit",
              "value": 508
            },
            {
              "date": "2018/8/3",
              "type": "coding test",
              "value": 2916
            },
            {
              "date": "2018/8/3",
              "type": "cookie project",
              "value": 289
            },
            {
              "date": "2018/8/4",
              "type": "git commit",
              "value": 6268
            },
            {
              "date": "2018/8/4",
              "type": "coding test",
              "value": 4512
            },
            {
              "date": "2018/8/4",
              "type": "cookie project",
              "value": 428
            },
            {
              "date": "2018/8/5",
              "type": "git commit",
              "value": 6411
            },
            {
              "date": "2018/8/5",
              "type": "coding test",
              "value": 8281
            },
            {
              "date": "2018/8/5",
              "type": "cookie project",
              "value": 619
            },
            {
              "date": "2018/8/6",
              "type": "git commit",
              "value": 1890
            },
            {
              "date": "2018/8/6",
              "type": "coding test",
              "value": 2008
            },
            {
              "date": "2018/8/6",
              "type": "cookie project",
              "value": 87
            },
            {
              "date": "2018/8/7",
              "type": "git commit",
              "value": 4251
            },
            {
              "date": "2018/8/7",
              "type": "coding test",
              "value": 1963
            },
            {
              "date": "2018/8/7",
              "type": "cookie project",
              "value": 706
            },
            {
              "date": "2018/8/8",
              "type": "git commit",
              "value": 2978
            },
            {
              "date": "2018/8/8",
              "type": "coding test",
              "value": 2367
            },
            {
              "date": "2018/8/8",
              "type": "cookie project",
              "value": 387
            },
            {
              "date": "2018/8/9",
              "type": "git commit",
              "value": 3880
            },
            {
              "date": "2018/8/9",
              "type": "coding test",
              "value": 2956
            },
            {
              "date": "2018/8/9",
              "type": "cookie project",
              "value": 488
            },
            {
              "date": "2018/8/10",
              "type": "git commit",
              "value": 3606
            },
            {
              "date": "2018/8/10",
              "type": "coding test",
              "value": 678
            },
            {
              "date": "2018/8/10",
              "type": "cookie project",
              "value": 507
            },
            {
              "date": "2018/8/11",
              "type": "git commit",
              "value": 4311
            },
            {
              "date": "2018/8/11",
              "type": "coding test",
              "value": 3188
            },
            {
              "date": "2018/8/11",
              "type": "cookie project",
              "value": 548
            },
            {
              "date": "2018/8/12",
              "type": "git commit",
              "value": 4116
            },
            {
              "date": "2018/8/12",
              "type": "coding test",
              "value": 3491
            },
            {
              "date": "2018/8/12",
              "type": "cookie project",
              "value": 456
            },
            {
              "date": "2018/8/13",
              "type": "git commit",
              "value": 6419
            },
            {
              "date": "2018/8/13",
              "type": "coding test",
              "value": 2852
            },
            {
              "date": "2018/8/13",
              "type": "cookie project",
              "value": 689
            },
            {
              "date": "2018/8/14",
              "type": "git commit",
              "value": 1643
            },
            {
              "date": "2018/8/14",
              "type": "coding test",
              "value": 4788
            },
            {
              "date": "2018/8/14",
              "type": "cookie project",
              "value": 280
            },
            {
              "date": "2018/8/15",
              "type": "git commit",
              "value": 445
            },
            {
              "date": "2018/8/15",
              "type": "coding test",
              "value": 4319
            },
            {
              "date": "2018/8/15",
              "type": "cookie project",
              "value": 176
            }
          ],
          "set1":
            [
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
            ],
          "set2":
            [
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
                "type": "download",
                "value": 43
              },
              {
                "date": "2018/8/12",
                "type": "download",
                "value": 41
              },
              {
                "date": "2018/8/13",
                "type": "download",
                "value": 64
              },
              {
                "date": "2018/8/14",
                "type": "download",
                "value": 16
              },
              {
                "date": "2018/8/15",
                "type": "download",
                "value": 44
              }
            ]
        }
      );
    }
    defaultSetting();
  }, []);

  useEffect(() => { // 데이터 중, 가장 큰 날짜 구하기 => default 세팅
    function defaultGroupDate(){
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
    const firstDateNum = new Date(dataSet[0].date);
    const lastDateNum = new Date(dataSet[dataSet.length - 1].date);

    const wholeDateLength = lastDateNum - firstDateNum;
    const selDateLength = selDate - firstDateNum;
    setGraphDate(selDate);
    setGraphRate(parseFloat((selDateLength / wholeDateLength).toFixed(1))); // %로 나타내기
  }

  function gotoGoalSet() { // add goal 버튼 클릭 시
    window.location.href = "/GoalSet";
  }

  function getConfig(type) {
    const data = dataSet[type];
    const config = {
      data, // 이름이 무조건 data여야함
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
    return config;
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
            <TabPane tab="All" key="1">
              <div>
                {dataSet.length !== 0 ? <Area {...getConfig("group")} /> : undefined}
              </div>
            </TabPane>
            <TabPane tab="set1" key="2">
              <div>
                {dataSet.length !== 0 ? <Line {...getConfig("set1")} /> : undefined }
                {
                  // 이것도 모듈화 하기
                }
              </div>
            </TabPane>
            <TabPane tab="set2" key="3">
              <div>
                {dataSet.length !== 0 ? <Bar {...getConfig("set2")} /> : undefined}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;