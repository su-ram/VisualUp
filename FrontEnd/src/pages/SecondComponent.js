import React, { Fragment } from "react";
import { PageHeader } from '../components';
import ImgCode from "../../src/img/coding.jpg";
import ImgStu from "../../src/img/studying.jpg";
import ImgGraph from "../../src/img/graph.jpg";
import ImgClock from "../../src/img/clock.jpg";
import "./SecondComponent.css"
import BGimg from "../../src/img/BGimg.png"


function SecondComponent() {
  return (
    <Fragment>
      <div className="component second-component">
        <div className = "second-container">
          <div className= "second-component-text">
          <PageHeader
            title="이런 분들에게 추천해요!"
            subtitle="Visual Up과 함께 해주실 분들을 찾습니다!"
           />
          </div>

          <div className = "second-box-container">
            <div className = "second-box-content">
              <img src =  {ImgCode} />
              <h3>코딩연습</h3>
              <h4>"나만의 코딩 스케쥴을 짜고싶어요!"</h4>
              <p>코딩 공부를 본격적으로 시작하려는데
                도움이 될만한 사이트를 찾지 못한
                당신을 위해 준비했어요
              </p>
            </div>

            <div className = "second-box-content">
            <img src =  {ImgStu} />
              <h3>자기주도 학습</h3>
              <h4>"혼자서 공부하면 실전률 0%"</h4>
              <p>제대로 된 계획을 세우지 못하거나
              어려움을 겪고있는 당신을 위해
              저희가 목표를 게시해줄 수 있어요.</p>
            </div>

            <div className = "second-box-content">
            <img src =  {ImgGraph} />
              <h3>작심삼일</h3>
              <h4>"세우는 계획마다 유통기한 3일"</h4>
              <p>계획상 100점, 실전성 0점
              목표 시각화 그래프를 통해 
              성취감과 동기부여가 될 수 있어요.</p>
            </div>

            <div className = "second-box-content">
            <img src =  {ImgClock} />
              <h3>시간 부족</h3>
              <h4>"시간 부담없는 목표를 세우고 싶어요."</h4>
              <p>바쁜 일상 속 틈틈히 코딩을 하기 위한
              당신을 위해 거창한 목표가 아니더라도 
              부담없이 작은 목표를 완성할 수 있어요</p>
            </div>
          </div>
        </div>
        <img className = "bg-img"src = {BGimg} />
      </div>
    </Fragment>
  );
};

export default SecondComponent;