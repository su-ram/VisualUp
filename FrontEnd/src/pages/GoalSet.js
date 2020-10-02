import React from 'react';
import { Input, Col, Row, Checkbox, InputNumber, DatePicker } from 'antd';
import "antd/dist/antd.css";
import styles from './GoalSet.module.css';
import { LineChartOutlined, BarChartOutlined, PieChartOutlined, AlignLeftOutlined, EditOutlined, CheckOutlined, CalendarOutlined, BarsOutlined, PushpinOutlined } from '@ant-design/icons'


function onDateChange(value) {
    console.log('changed', value);
  }

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

function GoalSet(){
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
                        <Input placeholder="ex)코딩 테스트 풀기"/>
                        </Col>
                        <br />
                        <br />
                        <Col span={13}>
                        <p className={styles.name}><CheckOutlined />목표량</p>
                        <br />
                        <Input placeholder="3"/>
                        </Col>
                        <br />
                        <br />
                        <Col span={15}>
                        <p className={styles.name}><CalendarOutlined />날짜 선택</p>
                        <br />
                        <br />
                        <DatePicker.RangePicker style={{ width: '100%' }} />
                        </Col>
                        <br />
                        <Col span={13}>
                        <p className={styles.name}><BarsOutlined />주기
                        <br />
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onDateChange} />
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
                        <Input placeholder="ex)코테"/>
                        <Input placeholder="ex)C++"/>
                    </Col>
                    <br />
                    <br />
                    <Col span={8}>
                        <Input placeholder="ex)취준"/>
                        <Input placeholder="ex)취준"/>
                    </Col>
                </Row>
                <Col span={15}>
                <div className={styles.name}><AlignLeftOutlined />템플릿 설정</div>
                </Col>
                <Col span={10}>
                <Checkbox onChange={onChange}>
                <div className={styles.graphname}>파이 그래프</div>
                <PieChartOutlined/>
                <div className={styles.graphdesc}>얼마나 많은 비중을 두고 했는지 볼 수 있어요</div>
                </Checkbox>
                <Checkbox onChange={onChange}>
                <div className={styles.graphname}>선 그래프</div>
                <PieChartOutlined style={{ fontSize: '20px'}}/>
                <div className={styles.graphdesc}>일일 목표 달성률을 한 눈에 볼 수 있어요</div>
                </Checkbox>
                <Checkbox onChange={onChange}>
                <div className={styles.graphname}>막대 그래프</div>
                <PieChartOutlined style={{ fontSize: '20px'}}/>
                <div className={styles.graphdesc}>목표 달성 순위를 매길 수 있어요</div>
                </Checkbox>
                </Col>
            </Col>
            </Row>
            </div>
    );
}

export default GoalSet;