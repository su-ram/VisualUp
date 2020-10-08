import React, {useState, useEffect, useRef} from 'react';
import { getIcon } from '../components/Icon';
import { Tabs, Tooltip, Carousel, Button } from 'antd';
import { Area, Line, Bar } from '@ant-design/charts';
import { SettingFilled, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function Graph(props){
    const range = 0.8; // 나중에 비율 조정
    const {dataSet, dailySet, groupDataSet, graphDate} = props;
    const [selectedGoalIdx, setSelGoalIdx] = useState(-1);
    const [graphRate, setGraphRate] = useState(1);
    const [visible, setVisible] = useState(false);

    const operations = <Button onClick={gotoGoalSet}>Add Goal</Button>;

    const slider = useRef(null);

    useEffect(()=>{
        function calGraphRate(){
            // datepicker에서 고른 날짜를 전체 기간의 %로 환산하여 표현 
            // => 아래의 slider를 표현하기 위함

            const selDate = graphDate;
    
            const start = selectedGoalIdx===-1?groupDataSet.startDate:dataSet[selectedGoalIdx].startDate;
            const end = selectedGoalIdx===-1?groupDataSet.endDate:dataSet[selectedGoalIdx].endDate;
            const length = Date.parse(end)-Date.parse(start);
            const selLength = Date.parse(selDate)-Date.parse(start);
    
            if (length < selLength) { // 선택된 날짜가 마지막 날짜 이후라면
                alert(`첫 기록 날짜(${Date(start).toString()}) 이후의 날짜를 선택해주세요.`);
                return;
            }
            if (selLength < 0) {
                alert(`마지막 기록 날짜(${Date(end).toString()}) 이전의 날짜를 선택해주세요.`);
                return;
            }

            setGraphRate(parseFloat((selLength / length).toFixed(2))); // %로 나타내기
        }
        calGraphRate();
    },[graphDate]);


    function getConfig(idx) {
      const data = dataSet[idx].dataSet;
      const config = {
        data, // 이름이 무조건 data여야함
        xField: 'date', // xfield에 적용할 변수
        yField: 'value', // yfield에 적용할 변수
        forceFit: true,
        color: dataSet[idx].graphColor, // 선 색깔 지정
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

    function getGroupConfig() {
        const data = groupDataSet.dataSet;
        const config = {
          data, // 이름이 무조건 data여야함
          xField: 'date', // xfield에 적용할 변수
          yField: 'value', // yfield에 적용할 변수
          seriesField: 'type', // 클릭 시 해당 그래프만 나타남 => 이름이 무조건 type이여야함
          color: groupDataSet.graphColor, // 선 색깔 지정
          legend: {
            visible: true,
            position: 'bottom-left',
          },
          xAxis: {
            type: 'dateTime', // x축 표시 형식
            tickCount: 5, // 몇 조각으로 나눌 건지
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

    function renderGraph(idx) {
        const type = dataSet[idx].template;
        switch (type) {
            case "Area": return <Area {...getConfig(idx)} />
            case "Line": return <Line {...getConfig(idx)} />
            case "Bar": return <Bar {...getConfig(idx)} />
        }
    }

    function renderGroupGraph(){
        return <Area {...getGroupConfig()}/>
    }

    function tabChanged(key){
        setSelGoalIdx(key);
    }


    function closeDrawer() {
        setVisible(false);
    }
    function showDrawer() {
        setVisible(true);
    }
    function prev() {
        if (slider !== null)
        slider.current.slick.slickPrev();
        console.dir(slider.current);
    }
    function next() {
        if (slider !== null)
        slider.current.slick.slickNext();
    }

    function getDailyCheck(data) {
        return (
            <div>
              {console.dir(data)}
              <div>{data.date.toString()}</div>
              <div>{data.WhatIdone}</div>
              <div>{data.value}</div>
            </div>
        );
    }

    function gotoGoalSet() { // add goal 버튼 클릭 시
        window.location.href = "/GoalSet";
      }


    return(
        <React.Fragment>
            <Tabs centered defaultActiveKey="-1" className="graph-tab-con" tabBarExtraContent={operations} onChange={tabChanged}>
                <TabPane tab="group" key={-1}>
                    {renderGroupGraph()}
                </TabPane>
                {
                Object.keys(dataSet).length > 0 ?
                    Object.keys(dataSet).map((index) =>
                    <TabPane tab={dataSet[index].title} key={index}>
                        <div id={dataSet[index].title === "group" ? "group" : ""} className="visual-graph-con">
                          {renderGraph(index)}
                          {!visible ?
                              <Tooltip placement="topLeft" title="데일리 체크">
                              <span className="dailycheck-btn left" onClick={showDrawer}>{getIcon("leftOutlined")}</span>
                              </Tooltip> : undefined
                          }
                          {visible ?
                              <div className="dailycheck-drawer">
                                  <div className="dailycheck-header">
                                  <span className="dailycheck-btn right" onClick={closeDrawer}>{getIcon("rightOutlined")}</span>
                                  </div>
                                  <div className="dailycheck-body">
                                      <div className="dailycheck-icon-con">
                                          <span className="dailycheck-icon" onClick={prev}><ArrowLeftOutlined /></span>
                                          <span className="dailycheck-icon" onClick={next}><ArrowRightOutlined /></span>
                                      </div>
                                      <Carousel ref={slider} dots={false}>
                                          {
                                              console.dir(dailySet[selectedGoalIdx])
                                          }
                                      </Carousel>
                                  </div>
                              </div>
                              : undefined
                          }
                        </div>
                        <div className="bottom-graph-con">
                        <div className="sns-con">
                            <button className="sns-btn"><img src="/img/internet.png" /></button>
                            <button className="sns-btn"><img src="/img/tweet.png" /></button>
                            <button className="sns-btn"><img src="/img/facebook.png" /></button>
                            <button className="sns-btn"><img src="/img/instagram.png" /></button>
                        </div>
                        {dataSet[index].title !== "group" ?
                            <Tooltip placement="bottom" title="목표 수정하기">
                            <a href={"/goalSet/"}><span className="setting-btn"><SettingFilled /></span></a>
                            {// goalSet 뒤에 해당 goalId 붙여줘야함 => dataSet에 goalId 저장필요
                            }
                            </Tooltip>
                            : undefined
                        }
                        </div>
                    </TabPane>
                    )
                    : "로딩중입니다..."
                }
          </Tabs>
        </React.Fragment>

    );
}