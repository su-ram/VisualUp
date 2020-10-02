import React from 'react';
import { Card, Col, Row, Pagination } from 'antd';
import {  EllipsisOutlined } from '@ant-design/icons';
import styles from './GoalList.module.css';
function GoalList(){
    return(
      <div>
            <h1 className={styles.mainTitle}>홍미주 님의 목표 리스트</h1>
            <Col align="middle" className={styles.sub}><p className={styles.subSub}>본인이 계획한 모든 목표들을 한 눈에 볼 수 있어요</p></Col>
            <Row align="middle" className={styles.body} justify="center">
      <Col span={6}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
            </Row>

      </div>)
}

export default GoalList;