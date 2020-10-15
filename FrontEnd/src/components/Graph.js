import React, { useState, useEffect, useRef } from 'react';
import { getIcon } from '../components/Icon';
import { Tabs, Tooltip, Button } from 'antd';
import { Area, Line, Bar } from '@ant-design/charts';
import { SettingFilled, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { DailyCheck } from '../components';
import "./Graph.css";

const { TabPane } = Tabs;

export default function Graph(props){
    const range = 0.6; // 나중에 비율 조정

    const {dataSet, dailySet, graphDate, graphRate, setGraphDate, selectedGoalIdx, setSelGoalIdx, getGoalDataFromDB} = props;
    const [selDateIdx, setSelDateIdx] = useState(-1);
    const [visible, setVisible] = useState(false);

    const carousel = useRef(null);

    useEffect(()=>{
        function calDailyIdx(){

          let diff = Number.MAX_VALUE;
          let idx = dailySet[selectedGoalIdx].dailys.length-1; // 제일 마지막 daily 가리키기

          dailySet[selectedGoalIdx].dailys.map((daily, index)=>{ // 선택된 날짜와 가장 가까운 dailySet으로 가기
            const tmp = Math.abs(Date.parse(graphDate)-Date.parse(daily.date));
            if(tmp<diff){
              diff = tmp;
              idx = index;
            }
          });
          setSelDateIdx(idx);
        }

        if(Number(selectedGoalIdx)!==0) 
          // dailySet이 들어온 후에 계산
          // group은 dailyset없어서 idx 필요없음
          calDailyIdx();

        // tab 변경 시 endDate가 같아도, daily index는 갱신되어야하기 떄문에, selectedGoalIdx 변경도 같이 받기
    },[graphDate, selectedGoalIdx]);

    useEffect(()=>{ // 결정된 dailySet idx로 이동
      goTo(selDateIdx);
    },[selDateIdx]);

    function tabChanged(key){
        setSelGoalIdx(key);
        setVisible(false);
    }

    function closeDrawer() {
        setVisible(false);
    }
    function showDrawer() {
        setVisible(true);
    }

    function prev() {
      if (carousel.current !== null){
        carousel.current.slick.slickPrev();
        setGraphDate(dailySet[selectedGoalIdx].dailys[selDateIdx-1].date);
      }
    }

    function next() {
      if (carousel.current !== null){
        carousel.current.slick.slickNext();
        setGraphDate(dailySet[selectedGoalIdx].dailys[selDateIdx+1].date);
      }
    }

    function goTo(idx){
      if (carousel.current!==null){
        carousel.current.slick.slickGoTo(idx);
      }
    }

    function getSNSCon(){
      return(
        <div className="visual-sns-con">
          {/*
          <Tooltip placement="top" title="인터넷에 공유">
            <button className="visual-sns-btn"><img src="/img/internet.png" /></button>
          </Tooltip>
          */}
          <Tooltip placement="top" title="트위터에 공유">
            <div>
              <a className="twitter-share-button"
                href="http://www.twitter.com/share?url=https://www.notion.so/invite/338103323a4685fd95e7cfb2589a3ec8483e818f">
                Tweet</a>
            </div>
          </Tooltip>
          <Tooltip placement="top" title="페이스북에 공유">
            <div className="fb-share-button" data-href="https://www.notion.so/invite/338103323a4685fd95e7cfb2589a3ec8483e818f" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://www.notion.so/invite/338103323a4685fd95e7cfb2589a3ec8483e818f" className="fb-xfbml-parse-ignore">Facebook</a></div>
          </Tooltip>
          {/*
          <Tooltip placement="top" title="인스타그램에 공유">
            <button className="visual-sns-btn"><img src="/img/instagram.png" /></button>
          </Tooltip>
          */}
        </div>
      );
    }

    function getConfig(idx) {
      const data = dataSet[idx].dataSet;

      let start; let end;
      if(graphRate<=(range/2)){
        start = 0;
        end = range;
      }else if(graphRate>=(1-range/2)){
        start = 1-range;
        end = 1;
      }else{
        start = (graphRate-(range/2)).toFixed(2);
        end = (graphRate+(range/2)).toFixed(2);
      }

      const config = {
        data, // 이름이 무조건 data여야함
        xField: 'date', // xfield에 적용할 변수
        yField: 'value', // yfield에 적용할 변수
        forceFit: true,
        seriesField: 'type', // 클릭 시 해당 그래프만 나타남 => 이름이 무조건 type이여야함
        color: dataSet[idx].graphColor, // 선 색깔 지정
        xAxis: {
          type: 'dateTime', // x축 표시 형식
          //tickCount: 10, // 몇 조각으로 나눌 건지
        },
        yAxis: { formatter: (v) => `${v}%` }, // y축 표시 형식
        interactions: [
          {
            type: 'slider',
            cfg: {
              start: start,
              end: end,
            },
          },
        ],
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
          visible: false,
        }
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

    function getTabPane(index){
      return(
        <TabPane tab={dataSet[index].title} key={index}>
          <div className="visual-graph-con">
            {renderGraph(index)}
            {index!=="0"? // 그룹이 아닌지
              visible? // 보이게 설정되어있는지
                <div className="dailycheck-drawer">
                  <div className="dailycheck-header">
                  <Tooltip placement="top" title="데일리 체크 닫기">
                    <span className="dailycheck-btn right" onClick={closeDrawer}>{getIcon("rightOutlined")}</span>
                  </Tooltip>
                  </div>
                  <div className="dailycheck-body">
                      <div className="dailycheck-icon-con">
                          <span className="dailycheck-icon" 
                                id={selDateIdx>=1?"visible":"not-visible"} 
                                onClick={prev}>
                            <ArrowLeftOutlined />
                          </span>
                          <span className="dailycheck-icon" 
                                id={selDateIdx<dailySet[selectedGoalIdx].dailys.length-1?"visible":"not-visible"} 
                                onClick={next}>
                            <ArrowRightOutlined />
                          </span>
                      </div>
                      {
                        index===selectedGoalIdx? // carousel이 하나의 ref만 가능해서 이렇게 구현
                          <DailyCheck
                            carousel = {carousel}
                            dailySet = {dailySet}
                            selectedGoalIdx = {selectedGoalIdx}
                            selDateIdx = {selDateIdx}
                            goTo = {goTo}
                            goalIdx = {index}
                            getGoalDataFromDB = {getGoalDataFromDB}
                          />:undefined
                      }
                  </div>
                </div>
                :
                <Tooltip placement="topLeft" title="데일리 체크">
                  <span className="dailycheck-btn left" onClick={showDrawer}>{getIcon("leftOutlined")}</span>
                </Tooltip>
              :undefined // 그룹은 dailycheck 안보임
              }
          </div>
          <div className="bottom-graph-con">
            {getSNSCon()}
            {index!=="0"? // 그룹이 아닌지
              <Tooltip placement="bottom" title="목표 수정하기">
                <a href={"/goalSet/"+dataSet[index].goalId}><span className="setting-btn"><SettingFilled /></span></a>
              </Tooltip>
              :undefined
              }
          </div>
        </TabPane>
      );
    }

    const operations = <Button onClick={()=>{window.location.href = "/GoalSet";}}>Add Goal</Button>;
    return(
        <React.Fragment>   
          <Tabs centered defaultActiveKey="0" className="graph-tab-con" tabBarExtraContent={operations} onChange={tabChanged}>
            {
              Object.keys(dataSet).length!==0? // dataSet이 들어왔으면
                Object.keys(dataSet).map((index) =>
                  // goal을 하나씩 TabPane으로 만들기
                  getTabPane(index)
                )
                : "로딩중입니다..."
            }
          </Tabs>
        </React.Fragment>

    );
}