import React from 'react';
import { Input, Col, Row, Checkbox, InputNumber, DatePicker } from 'antd';
import "antd/dist/antd.css";
function onDateChange(value) {
    console.log('changed', value);
  }

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

function GoalSet(){
    return(
        <Row justify="center">
            <Col span={12}>
            <div className="site-input-group-wrapper">
        <Input.Group size="large">
        <Row gutter={8}>
        <Col span={13}>
            목표
          <Input placeholder="ex)코딩 테스트 풀기"/>
        </Col>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Col span={13}>
            목표량
          <Input placeholder="3"/>
        </Col>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Input.Group compact>
        날짜 선택
        <br />
        <DatePicker.RangePicker style={{ width: '70%' }} />
        </Input.Group>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Col span={13}>
            주기
            <InputNumber min={1} max={10} defaultValue={3} onChange={onDateChange} />일마다
        </Col>
        </Row>
    </Input.Group>
  </div>
            </Col>
        <Col span={12}>
            <Col span={13}>
                키워드 설정
                <Input placeholder="ex)코테"/>
            </Col>
            <br/>
            <Col span={13}>
                <Input placeholder="ex)C++"/>
            </Col>
            <br/>
            <Col span={13}>
                <Input placeholder="ex)취준"/>
            </Col>
            <br/>
            <Col span={13}>
                <Input placeholder="ex)파이썬"/>
            </Col>
            <br/>
            <Col span={13}>
                <Input placeholder="ex)자바"/>
            </Col>
            <br/>
            <Checkbox onChange={onChange}>파이 그래프
            <br/>
            
            얼마나 많은 비중을 두고 했는지 볼 수 있어요</Checkbox>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Checkbox onChange={onChange}>선 그래프
            <br/>
            일일 목표 달성률을 한 눈에 볼 수 있어요</Checkbox>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Checkbox onChange={onChange}>막대 그래프
            <br/> 목표 달성 순위를 매길 수 있어요. </Checkbox>

        </Col>
        </Row>
    );
}

export default GoalSet;