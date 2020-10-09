import React, { useEffect } from 'react';
import { Carousel } from 'antd';

function DailyCheck(props){
    const {carousel, dailySet, selectedGoalIdx, goTo} = props;

    useEffect(()=>{
        goTo(dailySet[selectedGoalIdx].dailys.length-1);
    },[selectedGoalIdx]);
    
    function getDailyCheck(data, title, term, termGoal, hashtags, index) {
        return (
            <div key={index}>
              <div>{title}</div>
              <div>{term}</div>
              <div>{termGoal}</div>
              <div>{hashtags}</div>
              <div>{data.date}</div>
              <div>{data.value}</div>
              <div>{data.whatIDone}</div>
            </div>
        );
    }

    return(
        <Carousel ref={carousel} dots={false}>
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