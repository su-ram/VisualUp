import React from 'react';
import { Input, Col, Row, Checkbox, InputNumber, DatePicker } from 'antd';
import "antd/dist/antd.css";
//import './GoalSet.css';
import { LineChartOutlined, BarChartOutlined, PieChartOutlined, AlignLeftOutlined, EditOutlined, CheckOutlined, CalendarOutlined, BarsOutlined, PushpinOutlined } from '@ant-design/icons'


function onDateChange(value) {
    console.log('changed', value);
  }

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

function GoalSet(){
    return(
        <Row justify="center" >
            <Col span={9} offset={3}>
                    <Input.Group size="large" className="GoalSet-input">
                        <Col span={13}>
                        <EditOutlined />
                            목표
                        <br />
                        <Input placeholder="ex)코딩 테스트 풀기"/>
                        </Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Col span={13}>
                        <CheckOutlined />
                            목표량
                            <br />
                        <Input placeholder="3"/>
                        </Col>
                        <br />
                        <br />
                        <br />
                        <br />
                    <Input.Group compact>
                    <CalendarOutlined />
                        날짜 선택
                        <br />
                        <DatePicker.RangePicker style={{ width: '70%' }} />
                    </Input.Group>
                        <br />
                        <br />
                        <br />
                        <Col span={13}>
                            <BarsOutlined />
                            주기
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onDateChange} />일마다
                         </Col>
                    </Input.Group>
            
            </Col>
            <Col span={9}>
                <Col span={15}>
                <PushpinOutlined />
                     해시태그 설정
                     <br />
                    <Input placeholder="ex)코테"/>
                </Col>
                <br/>
                <Col span={15}>
                    <Input placeholder="ex)C++"/>
                </Col>
                <br/>
                <Col span={15}>
                    <Input placeholder="ex)취준"/>
                </Col>
                <br/>
                <Col span={15}>
                    <Input placeholder="ex)파이썬"/>
                </Col>
                <br/>
                <Col span={15}>
                    <Input placeholder="ex)자바"/>
                </Col>
                <br />
                <AlignLeftOutlined />
                템플릿 설정
                <br />
                <Checkbox onChange={onChange}>
                파이 그래프
                <br/>
                얼마나 많은 비중을 두고 했는지 볼 수 있어요</Checkbox>
                <br/>
                <PieChartOutlined style={{ fontSize: '40px'}}/>
                <br/>
                <br/>
                <Checkbox onChange={onChange}>
                선 그래프
                <br/>
                일일 목표 달성률을 한 눈에 볼 수 있어요</Checkbox>
                <br/>
                <LineChartOutlined style={{ fontSize: '40px'}} />
                <br/>
                <br/>
                <Checkbox onChange={onChange}>
                
                막대 그래프
                <br/> 목표 달성 순위를 매길 수 있어요. </Checkbox>
                <br/>
                <BarChartOutlined style={{ fontSize: '40px'}}/>
                
            </Col>
            </Row>
    );
}

export default GoalSet;