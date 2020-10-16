import React, { useEffect } from 'react';
import { Carousel, Input } from 'antd';
import "./DailyCheck.css";
import {getDateString} from "../shared/GetDateString";
import {StarFilled } from '@ant-design/icons';
import axios from "axios";

const { TextArea } = Input;
const cheerUp = [
    "내 스스로 확신한다면, 나는 남의 확신을 구하지 않는다.",
    "생각하는 대로 살지 않으면 사는 대로 생각하게 된다.",
    "고개를 들어라. 각도가 곧 태도다.",
    "노력은 설명하는 것이 아닌 증명하는 것이다.",
    "안하는 것보다 늦게하는 것이 낫다",
    "능력은 꿈에 어울리게 성장하기 마련이다.",
    "나중엔 습관이 사람을 만든다.",
    "탁월함은 행동이 아니라 습관이다.",
    "젊었을 때 형성된 습관이 모든 차이를 만든다.",
    "좋은 것을 포기하는 걸 두려워하지 마라.",
    "행동은 모든 성공의 기본 열쇠이다."
]; // cheerup 멘트 모음

function DailyCheck(props){
    const {carousel, dailySet, selectedGoalIdx, selDateIdx, goTo, goalIdx, getGoalDataFromDB} = props;

    useEffect(()=>{
        goTo(selDateIdx, true);
    },[selDateIdx]);

    function setStar(index, num){
        // 별 누르면 갯수만큼 켜지게 하기

        for(let i=0; i<=num; i++){
            let target = null;
            const obj = document.getElementsByClassName(`star${goalIdx}${index}${i}`);
            for(let i=0; i<obj.length; i++){
                if(obj[i].parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('slick-current')){
                    target = obj[i];
                    break;
                }
            }
            if(obj===null || target===null)
                continue;

            target.classList.remove('star_off');
            target.classList.add('star_on');
            
        }
        for(let i=num+1; i<5; i++){
            let target = null;
            const obj = document.getElementsByClassName(`star${goalIdx}${index}${i}`);
            for(let i=0; i<obj.length; i++){
                if(obj[i].parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('slick-current')){
                    target = obj[i];
                    break;
                }
            }
            if(obj===null || target===null)
                continue;
                
            target.classList.remove('star_on');
            target.classList.add('star_off');
        }
    }

    function getStars(value, date, index){

        let star = Math.floor(value/20);
        let starArray = [];
        
        for(let i=0; i<star; i++){
            starArray.push(<StarFilled key={i} onClick={isToday(date)?()=>setStar(index, i):undefined} className={"star_on "+(isToday(date)?"today ":"") + `star${goalIdx}${index}${i}`}/>);
        }
        for(let j=0; j<5-star; j++){
            starArray.push(<StarFilled key={star+j} onClick={isToday(date)?()=>setStar(index, star+j):undefined} className={"star_off "+(isToday(date)?"today ":"")+ `star${goalIdx}${index}${star+j}`}/>)
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

    function isToday(date){
        const now = new Date();
        let dateStr = getDateString(now);
        
        return date===dateStr;
    }

    function getHashTag(str){
        if(str==null)
            return "";
        let strArr = str.split(', ');
        for(let i=0; i<strArr.length; i++)
            strArr[i] = "#" + strArr[i] + " ";
        return strArr;
    }

    function saveToDB(dailyId){
        // goal 단위로 DB에 저장하기 => daily 단위도 가능한지 물어보기
        // 저장 후 다시 받아오기 => 해당 goal에 대해서만! => Visaulize에서 실행
        //dailyId 받아오고 나서 하기
        const headers = {
            'Access-Control-Allow-Origin': '*',        
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.delete(`https://visualup.koreacentral.cloudapp.azure.com/daily?dailyId=${dailyId}`, headers)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
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
        getGoalDataFromDB(selectedGoalIdx);
    }

    function deleteAtDB(dailyId){
        // dailycheck Data 삭제
        if(window.confirm("정말 삭제하시겠습니까?")){
            const headers = {
                'Access-Control-Allow-Origin': '*',        
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            axios.delete(`http://visualup.koreacentral.cloudapp.azure.com/daily?dailyId=${dailyId}`, headers)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
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
        }
    }

    function getDailyCheck(data, title, term, termGoal, hashtags, index) {
        return (
            <div key={index} className="dailycheck-contents-con">
              <div className="dailycheck-underborder dailycheck-title"><p className="check-db-data">{title}</p>
                <div>
                  {isToday(data.date)?<button className="save-btn" onClick={()=>saveToDB(data.dailyId)}>저장하기</button>:undefined}
                  <button className="delete-btn" onClick={()=>deleteAtDB(data.dailyId)}>삭제하기</button>
                </div>
              </div>
              <div>
                <div className="dailycheck-underborder dailycheck-term">주기 <p className="check-db-data">{term}</p>일 마다</div>
                <div className="dailycheck-underborder dailycheck-term-goal">주기별 목표 : <p className="check-db-data">{termGoal}</p></div>
              </div>
              <div>
                <div className="dailycheck-underborder dailycheck-date"><p className="check-db-data">{data.date}{getDay(data.date)}</p></div>
                <div className="dailycheck-underborder dailycheck-stars">{getStars(data.value, data.date, index)}</div>
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
                Object.keys(dailySet).length!==0?
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