import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Col, Row, Checkbox, DatePicker, Switch } from 'antd';
import { PageHeader } from '../components';
import "antd/dist/antd.css";
import './GoalSet.css';
import styles from './GoalSet.module.css';
import moment from 'moment';
import { LineChartOutlined, BarChartOutlined, PieChartOutlined, AlignLeftOutlined, EditOutlined, AreaChartOutlined, CalendarOutlined, BarsOutlined, PushpinOutlined } from '@ant-design/icons'

import { useHistory } from "react-router-dom";



function GoalSet({match}){
    const history = useHistory();

    const [goalId, setGoalId] = useState("");
    const [dbData, setDBdata] = useState();
    const [visible, setVisible] = useState(false); // 색상 팔레드 보이는지

    const [goal, setGoal] = useState("");
    const [term, setTerm] = useState("");
    const [termGoal, setTermGoal] = useState("");
    const [date, setDate] = useState(["2020-10-17", "2020-10-17"]);
    const [hashtag1, setHashtag1] = useState("");
    const [hashtag2, setHashtag2] = useState("");
    const [hashtag3, setHashtag3] = useState("");
    const [hashtag4, setHashtag4] = useState("");
    const [template, setTemplate] = useState("");
    const [graphColor, setGraphColor] = useState("#FF6B29");
    const [notPrivate, setPrivate] = useState(false);
    const { RangePicker } = DatePicker;

    useEffect(()=>{
        if(match.params.goalId!==undefined)
          setGoalId(match.params.goalId);
    },[match.params.goalId])

    useEffect(()=>{
        getDataFromDB();
    },[goalId])
    
    useEffect(()=>{
        if(dbData!==undefined){
            const hash = getHashTag(dbData.hashtags);
            console.log(hash);
            setGoal(dbData.title);
            setTerm(dbData.term);
            setTermGoal(dbData.termGoal);
            setDate([dbData.startDate,dbData.endDate]);
            setHashtag1(hash[0]);
            setHashtag2(hash[1]);
            setHashtag3(hash[2]);
            setHashtag4(hash[3]);
            setGraphColor(dbData.graphColor);
            setTemplate(dbData.template);
        }
    },[dbData])


    function getHashTag(str){
        if(str==null)
            return "";
        let strArr = str.split(',');
        strArr.length=4;
        return strArr;
    }
    
    function getDataFromDB(){
        // db에서 해당 목표 정보 받아오기
        
        const headers = {
          'Access-Control-Allow-Origin': '*',        
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.get(`http://visualup.koreacentral.cloudapp.azure.com/goal/goalSet/${goalId}`, headers)
        .then((res)=>{
          console.log(res.data);
          setDBdata(res.data);
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

    
    async function onChangeDate(_, timeString) {
        if (timeString === null) { // 날짜를 삭제해도 기존 날짜로 유지
        return;
        }
        const selDate = timeString;
        await setDate(selDate);
    }
    
    const onChangeGoal = e => setGoal(e.target.value);
    const onChangeTerm = e => setTerm(e.target.value);
    const onChangeTermGoal = e => setTermGoal(e.target.value);
    const onChangehashtag1 = e => setHashtag1(e.target.value);
    const onChangehashtag2 = e => setHashtag2(e.target.value);
    const onChangehashtag3 = e => setHashtag3(e.target.value);
    const onChangehashtag4 = e => setHashtag4(e.target.value);
    function onChangeTemplate(type) {
        setTemplate(type);
    }
    //const onChangeGraphColor = e => setGraphcolor(e.target.value);

    function saveDataToDB(){
        const hash = hashtag1 + "," + hashtag2 + "," + hashtag3 + "," + hashtag4;
        
        const headers = {
            'Access-Control-Allow-Origin': '*',        
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        const data = {
            "userId":"user102",
            "title": goal,
            "termGoal": termGoal,
            "open": notPrivate,
            "startDate": date[0],
            "endDate": date[1],
            "term": term,
            "hashtags": hash,
            "template": template,
            "graphColor": graphColor
        };
        if(goalId===""){
            axios.post(`http://visualup.koreacentral.cloudapp.azure.com/goal`, data, headers, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
            const status = err?.response?.status;
            console.log(err);
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
        }else{
            axios.put(`http://visualup.koreacentral.cloudapp.azure.com/goal?goalId=${goalId}`, {
                "userId":"user102",
                "title": goal,
                "termGoal": termGoal,
                "open": notPrivate,
                "startDate": date[0],
                "endDate": date[1],
                "term": term,
                "hashtags": hash,
                "template": template,
                "graphColor": graphColor
            }, headers, { withCredentials: true })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
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
    }

    return(
        <div>
            <PageHeader
                title="목표 입력"
                subtitle="본인이 달성할 목표를 상세하게 적어주세요."
            />
            <div className="goalset-con">
                <div className="col-goalset-con">
                    <div className="goalset-input-con">
                        <p className={styles.name}><EditOutlined />목표</p>
                        <input className={styles.input} placeholder="ex)코딩 테스트 풀기" onChange={onChangeGoal} value={goal}/>
                    </div>
                    <div className="goalset-input-con">
                        <p className={styles.name}><CalendarOutlined />날짜 선택</p>
                        {
                            (goalId==="" || date.length!==0)?
                            <RangePicker
                                defaultValue={[moment(date[0]), moment(date[1])]}
                                onChange={onChangeDate}
                            />:undefined
                        }
                    </div>
                    <div className="goalset-input-con">
                        <p className={styles.name}>
                            <BarsOutlined />주기
                        </p>
                        <div className="goalset-term-con">
                            <input className={styles.input} value={term} placeholder="ex)3" onChange={onChangeTerm} />
                            <p>일마다</p>
                        </div>
                    </div>
                    <div className="goalset-input-con">
                        <p className={styles.name}><EditOutlined />주기별 목표</p>
                        <input className={styles.input} placeholder="ex)코딩 테스트 문제 5개 풀기" onChange={onChangeTermGoal} value={termGoal}/>
                    </div>
                </div>
                <div className="col-goalset-con">
                    <div className="goalset-input-con">
                        <p className={styles.name}><PushpinOutlined />해시태그 설정</p>
                        <div className="goalset-hashtag-con">
                            <div className="goalset-hashtag-subcon">
                                <input className={styles.input} onChange={onChangehashtag1} value={hashtag1} placeholder="ex)코테"/>
                                <input className={styles.input} onChange={onChangehashtag2} value={hashtag2} placeholder="ex)C++"/>
                                <input className={styles.input} onChange={onChangehashtag3} value={hashtag3} placeholder="ex)자바"/>
                                <input className={styles.input} onChange={onChangehashtag4} value={hashtag4} placeholder="ex)취준"/>
                            </div>
                        </div>
                    </div>
                    <div className="goalset-input-con">
                        <div className="template-title">
                            <div className={styles.name}><AlignLeftOutlined />템플릿 설정</div>
                            <div onClick={()=>setVisible(true)} className="pick-color">색상 설정하기</div>
                        </div>
                        {visible?
                            <div className="color-pick-con">
                                <div className="color-palette">
                                    <div onClick={()=>{setGraphColor("#FF6B29"); setVisible(false)}} className="color-con color1"></div>
                                    <div onClick={()=>{setGraphColor("#4EE23E"); setVisible(false)}} className="color-con color2"></div>
                                    <div onClick={()=>{setGraphColor("#41A0FF"); setVisible(false)}} className="color-con color3"></div>
                                </div>
                                <div className="color-palette">
                                    <div onClick={()=>{setGraphColor("#FFCB66"); setVisible(false)}} className="color-con color4"></div>
                                    <div onClick={()=>{setGraphColor("#DD52FF"); setVisible(false)}} className="color-con color5"></div>
                                    <div onClick={()=>{setGraphColor("#FF3939"); setVisible(false)}} className="color-con color6"></div>
                                </div>
                            </div>
                            :undefined
                        }
                        <div>
                            <div onClick={(e)=>onChangeTemplate("Bar")} className={template==="Bar"?"selected-template template-con":"template-con"}>
                                <BarChartOutlined style={{ fontSize: '25px' }} />
                                <div className={styles.graphname}>바 그래프</div>
                                <div className="graphdesc">일일 목표 달성률을 한 눈에 볼 수 있어요</div>
                            </div>
                            <div onClick={(e)=>onChangeTemplate("Line")} className={template==="Line"?"selected-template template-con":"template-con"}>
                                <LineChartOutlined style={{ fontSize: '25px' }} />
                                <div className={styles.graphname}>선 그래프</div>
                                <div className="graphdesc">기간 별 성장 추세를 한 눈에 볼 수 있어요</div>
                            </div>
                            <div onClick={(e)=>onChangeTemplate("Area")} className={template==="Area"?"selected-template template-con":"template-con"}>
                                <AreaChartOutlined style={{ fontSize: '25px' }}/>
                                <div className={styles.graphname}>영역 그래프</div>
                                <div className="graphdesc">여러 그래프의 포개어진 영역을 볼 수 있어요</div>
                            </div>
                        </div>
                    </div>
                    <div className="goalset-input-con private-con">
                        <div className="private-subcon">
                            <div className={styles.open}>공개설정</div>
                            <div className="goalset-private">
                                비공개
                                    <Switch onClick={() => setPrivate(!notPrivate)} checked={!notPrivate} />
                                공개
                            </div>
                        </div>
                    </div>
                    <div className="goalset-btn-con">
                        <button type="button" onClick={()=>{saveDataToDB(); history.goBack();}} className={styles.btn1}><p className={styles.font}>저장하기</p> </button>
                        <button type="button" onClick={()=>{history.goBack();}} className={styles.btn2}><p className={styles.font}>취소</p></button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default GoalSet;