import React, { useEffect } from 'react';
import { Carousel, Input } from 'antd';
import "./DailyCheck.css";
import {StarFilled } from '@ant-design/icons';

const { TextArea } = Input;
const cheerUp = [
    "내 스스로 확신한다면, 나는 남의 확신을 구하지 않는다.",
    "생각하는 대로 살지 않으면 사는 대로 생각하게 된다.",
    "고개를 들어라. 각도가 곧 태도다.",
    "노력은 설명하는 것이 아닌 증명하는 것이다.",
    "안하는 것보다 늦게하는 것이 낫다",
    "능력은 꿈에 어울리게 성장하기 마련이다."
];

function DailyCheck(props){
    const {carousel, dailySet, selectedGoalIdx, goTo} = props;

    useEffect(()=>{
        goTo(dailySet[selectedGoalIdx].dailys.length-1, true);
    },[selectedGoalIdx]);

    function getStars(value, date){
        // 회의 후 결정 => 오늘이 아닌 날짜 수정 가능하게 할 건지

        let star = value/20;
        let starArray = [];
        
        for(var i=0; i<star; i++){
            starArray.push(<StarFilled key={i} className="star" style={{fontSize: "1.5rem", color: "#ffb100"}}/>);
        }
        for(var i=0; i<5-star; i++){
            starArray.push(<StarFilled key={star+i} className="star" style={{fontSize: "1.5rem", color: "#b9b9b9"}}/>)
        }

        return(starArray);
    }

    function getDay(date){
        const dateForm = new Date(date);
        const numDay = dateForm.getDay();

        switch(numDay){
            case 0:
                return "(일)";
            case 1:
                return "(월)";
            case 2:
                return "(화)";
            case 3:
                return "(수)";
            case 4:
                return "(목)";
            case 5:
                return "(금)";
            case 6:
                return "(토)";
            default:
                return "(X)";
        }
    }
    
    function getCheerUp(){
        const num = Math.floor(Math.random() * (cheerUp.length-1));
        return (cheerUp[num]);
    }

    function getDateString(date){
        return (date.getFullYear() + "/" 
                + (date.getMonth()+1 <= 9 ? "0" : "") + (date.getMonth()+1) + "/"
                + (date.getDate() <= 9 ? "0" : "") + date.getDate());
    }

    function isToday(date){
        const now = new Date();
        let dateStr = getDateString(now);
        
        return date===dateStr;
    }

    function getHashTag(str){
        let strArr = str.split(', ');
        for(let i=0; i<strArr.length; i++)
            strArr[i] = "#" + strArr[i] + " ";
        return strArr;
    }

    function getDailyCheck(data, title, term, termGoal, hashtags, index) {
        return (
            <div key={index} className="dailycheck-contents-con">
              <div className="dailycheck-underborder dailycheck-title"><p className="check-db-data">{title}</p></div>
              <div>
                <div className="dailycheck-underborder dailycheck-term">주기 <p className="check-db-data">{term}</p>일 마다</div>
                <div className="dailycheck-underborder dailycheck-term-goal">주기별 목표 : <p className="check-db-data">{termGoal}</p></div>
              </div>
              <div>
                <div className="dailycheck-underborder dailycheck-date"><p className="check-db-data">{data.date}{getDay(data.date)}</p></div>
                <div className="dailycheck-underborder dailycheck-stars">{getStars(data.value, data.date)}</div>
              </div>
              <div className="dailycheck-what-i-done">
                  <div>오늘 하루 정리</div>
                  <div className="what-i-done-box"><TextArea defaultValue={data.whatIDone} disabled={!isToday(data.date)} autoSize={{ minRows: 3, maxRows: 4 }}/></div>
                </div>
              <div className="dailycheck-underborder dailycheck-cheerup"><p>cheer up!</p><p>{getCheerUp()}</p></div>
              <div className="dailycheck-hashtags"><p className="check-db-data">{getHashTag(hashtags)}</p></div>
            </div>
        );
    }

    return(
        <Carousel ref={carousel} className="dailycheck-con" dots={false}>
            {
                dailySet!==null?
                    dailySet[selectedGoalIdx].dailys.map((daily, index)=>
                        getDailyCheck(daily,
                        dailySet[selectedGoalIdx].title, 
                        dailySet[selectedGoalIdx].term, 
                        dailySet[selectedGoalIdx].termGoal, 
                        dailySet[selectedGoalIdx].hashtags,
                        index
                        )
                    ): "로딩중입니다..."
            }
        </Carousel>
    );
}

export default DailyCheck;