import React, {useState} from 'react';
import { Input, Col, Row, Checkbox, InputNumber, DatePicker, Switch } from 'antd';
import "antd/dist/antd.css";
import styles from './GoalSet.module.css';
import { LineChartOutlined, BarChartOutlined, PieChartOutlined, AlignLeftOutlined, EditOutlined, CheckOutlined, CalendarOutlined, BarsOutlined, PushpinOutlined } from '@ant-design/icons'


function onDateChange(value) {
    console.log('changed', value);
  }

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
function GoalSet(){
    const [inputs, setInputs] = useState({
        set: '',
        setsize: '',
        date:'',
        period:'',
        hashtag1:'',
        hashtag2:'',
        hashtag3:'',
        hashtag4:'',
        graph:'',
        checked:false
    });

    const { set, setsize, date, period, hashtag1, hashtag2, hashtag3, hashtag4, graph } = inputs;

    const onvaluechange = (e) => {
        const { value, name } = e.target;
        setInputs({
          ...inputs,
          [name]: value 
        });
      };

    const options = [
        { label: '파이 그래프', value: '파이 그래프' },
        { label: '선 그래프', value: '선 그래프' },
        { label: '막대 그래프', value: '막대 그래프' },
      ];
    
    return(
        <div>
        <h1 className={styles.mainTitle}>목표 입력</h1>
            <Col align="middle" className={styles.sub}><p className={styles.subSub}>본인이 달성할 목표를 상세하게 적어주세요.</p></Col>
        <Row justify="center" >
            <Col span={9} offset={3}>
                    <Input.Group className="GoalSet-input">
                        <Col span={13}>
                        <p className={styles.name}><EditOutlined />목표</p>
                        <br />
                        <Input placeholder="ex)코딩 테스트 풀기" onvaluechange={onvaluechange} value={set}/>
                        </Col>
                        <br />
                        <br />
                        <Col span={13}>
                        <p className={styles.name}><CheckOutlined />목표량</p>
                        <br />
                        <Input placeholder="3"  onvaluechange={onvaluechange} value={setsize}/>
                        </Col>
                        <br />
                        <br />
                        <Col span={15}>
                        <p className={styles.name}><CalendarOutlined />날짜 선택</p>
                        <br />
                        <br />
                        <DatePicker.RangePicker  onvaluechange={onvaluechange} value={date} style={{ width: '100%' }} />
                        </Col>
                        <br />
                        <Col span={13}>
                        <p className={styles.name}><BarsOutlined />주기
                        <br />
                        <InputNumber  onvaluechange={onvaluechange} value={period} min={1} max={10} defaultValue={3} onChange={onDateChange} />
                        일마다
                        </p>
                         </Col>
                    </Input.Group>
            
            </Col>
            <Col span={12}>
                <Col span={16}>
                <p className={styles.name}><PushpinOutlined />해시태그 설정</p>
                     <br /><br /><br /><br />
                </Col>
                <Row>
                    <Col span={8}>
                        <Input onvaluechange={onvaluechange} value={hashtag1} placeholder="ex)코테"/>
                        <Input onvaluechange={onvaluechange} value={hashtag2} placeholder="ex)C++"/>
                    </Col>
                    <br />
                    <br />
                    <Col span={8}>
                        <Input onvaluechange={onvaluechange} value={hashtag3} placeholder="ex)자바"/>
                        <Input onvaluechange={onvaluechange} value={hashtag4} placeholder="ex)취준"/>
                    </Col>
                </Row>
                <Col span={15}>
                <div className={styles.name}><AlignLeftOutlined />템플릿 설정</div>
                </Col>
                <Col span={12}>
                <Checkbox.Group className={styles.graphname} value={graph} options={options} defaultValue={['파이 그래프']} onChange={onChange}>
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
                <Switch onClick={() => setInputs(!inputs.checked)} checked={inputs.checked} />비공개</div>
                </Col>
                <Col span={24}>
                <button type="button" className={styles.btn1}><p className={styles.font}>등록하기</p> </button>
                <button type="button" className={styles.btn2}><p className={styles.font}>취소 </p> </button>
                </Col>
            
            </Col>
            </Row>
            
            </div>
    );
}

export default GoalSet;