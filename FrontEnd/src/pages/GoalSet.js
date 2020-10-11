import React, {useState} from 'react';
import axios from 'axios';
import { Col, Row, Checkbox, DatePicker, Switch } from 'antd';
import "antd/dist/antd.css";
import styles from './GoalSet.module.css';
import moment from 'moment';


import { LineChartOutlined, BarChartOutlined, PieChartOutlined, AlignLeftOutlined, EditOutlined, CheckOutlined, CalendarOutlined, BarsOutlined, PushpinOutlined } from '@ant-design/icons'



function GoalSet(){
    const [goal, setgoal] = useState("");
    const [date, setdate] = useState([]);
    const [period, setperiod] = useState("");
    const [periodgoal, setperiodgoal] = useState("");
    const [hashtag1, sethashtag1] = useState("");
    const [hashtag2, sethashtag2] = useState("");
    const [hashtag3, sethashtag3] = useState("");
    const [hashtag4, sethashtag4] = useState("");
    const [graph, setgraph] = useState("");
    const [graphcolor, setgraphcolor] = useState("");
    const [checked, setchecked] = useState(false);
    const { RangePicker } = DatePicker;


    async function onChangedate(_, timeString) {
      if (timeString === null) { // 날짜를 삭제해도 기존 날짜로 유지
        return;
      }
      const selDate = timeString;
      await setdate(selDate);
    }

    function onOk(value) {
      console.log('onOk: ', value);
    }
    const onChangegoal = e => setgoal(e.target.value);
    const onDateChange = e => setperiod(e.target.value);
    const onChangeperiodgoal = e => setperiodgoal(e.target.value);
    const onChangehashtag1 = e => sethashtag1(e.target.value);
    const onChangehashtag2 = e => sethashtag2(e.target.value);
    const onChangehashtag3 = e => sethashtag3(e.target.value);
    const onChangehashtag4 = e => sethashtag4(e.target.value);
    function onChangegraph(checkedValues) {
        console.log('checked = ', checkedValues);
      }
    const onChangegraphcolor = e => setgraphcolor(e.target.value);

    const options = [
        { label: '파이 그래프', value: '파이 그래프' },
        { label: '선 그래프', value: '선 그래프' },
        { label: '막대 그래프', value: '막대 그래프' },
      ];
      const api= "https://virtserver.swaggerhub.com/VisualUp/VisualUp_Api/1.0.0/goal"
      const onSubmit = async() => {
        try{
        const status= {
        title: goal,
        date:date,
        term:period,
        //startdate, enddate:period,, graphcolor추가해야함, hashtag 묶어야지
        termgoal:periodgoal,
        hashtags:hashtag1+", "+hashtag2+", "+hashtag3+", "+hashtag4,
        template:graph,
        open:false
      };
      const { data: post } = await axios.post(api, status);
      console.log(status);
      if (status === 201) {
        alert("목표가 등록되었습니다.");
      }} catch (e) {
        alert("userid가 없습니다.");
      } 
    }
    

    return(
        <div>
        <h1 className={styles.mainTitle}>목표 입력</h1>
            <Col align="middle" className={styles.sub}><p className={styles.subSub}>본인이 달성할 목표를 상세하게 적어주세요.</p></Col>
        <Row justify="center" >
            <Col span={9} offset={3}>
                <Col span={12}>
                <p className={styles.name}><EditOutlined />목표</p>
                <br />
                <input className={styles.input} placeholder="ex)코딩 테스트 풀기" onChange={onChangegoal} value={goal}/>
                <br />
                <br />
                <p className={styles.name}><CalendarOutlined />날짜 선택</p>
                <br />
                <br />
                  <RangePicker
                    ranges={{
                      Today: [moment(date[0]), moment(date[1])],
                      'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}
                    onChange={onChangedate}
                    onOk={onOk}
                  />
                <br />
                <p className={styles.name}><BarsOutlined />주기
                <br />
                <input className={styles.input} value={period} placeholder="ex)3" onChange={onDateChange} />
                일마다
                </p>
                <p className={styles.name}><EditOutlined />주기별 목표</p>
                <br />
                <input className={styles.input} placeholder="ex)코딩 테스트 문제 5개 풀기" onChange={onChangeperiodgoal} value={periodgoal}/>
                </Col>
            
            </Col>
            <Col span={12}>
                <Col span={16}>
                <p className={styles.name}><PushpinOutlined />해시태그 설정</p>
                     <br /><br /><br /><br />
                </Col>
                <Row>
                    <Col span={8}>
                        <input className={styles.input} onChange={onChangehashtag1} value={hashtag1} placeholder="ex)코테"/>
                        <input className={styles.input} onChange={onChangehashtag2} value={hashtag2} placeholder="ex)C++"/>
                    </Col>
                    <br />
                    <br />
                    <Col span={8}>
                        <input className={styles.input} onChange={onChangehashtag3} value={hashtag3} placeholder="ex)자바"/>
                        <input className={styles.input} onChange={onChangehashtag4} value={hashtag4} placeholder="ex)취준"/>
                    </Col>
                </Row>
                <Col span={15}>
                <div className={styles.name}><AlignLeftOutlined />템플릿 설정</div>
                </Col>
                <Col span={12}>
                <Checkbox.Group className={styles.graphname} value={graph} options={options} defaultValue={['파이 그래프']} onChange={onChangegraph}>
                </Checkbox.Group>
                <br />
                <br />
                <div className={styles.graphname}>파이 그래프
                <PieChartOutlined style={{ fontSize: '25px'}}/></div>
                <div className={styles.graphdesc}>얼마나 많은 비중을 두고 했는지 볼 수 있어요</div>
                <br />
                <div className={styles.graphname}>선 그래프
                <LineChartOutlined style={{ fontSize: '25px'}}/></div>
                <div className={styles.graphdesc}>일일 목표 달성률을 한 눈에 볼 수 있어요</div>
                <br />
                <div className={styles.graphname}>막대 그래프
                <BarChartOutlined style={{ fontSize: '25px'}}/></div>
                <div className={styles.graphdesc}>목표 달성 순위를 매길 수 있어요</div>
                </Col>
                <Col span={24}>
                <div className={styles.open}>공개설정</div>
                </Col>
                <Col span={24}>
                <div className={styles.graphdesc}>공개
                <Switch onClick={() => setchecked(!checked)} checked={checked} />비공개</div>
                </Col>
                <Col span={24}>
                <button type="button" onClick={onSubmit} className={styles.btn1}><p className={styles.font}>등록하기</p> </button>
                <button type="button" className={styles.btn2}><p className={styles.font}>취소 </p> </button>
                </Col>
            
            </Col>
            </Row>
            
            </div>
    );
}

export default GoalSet;