import React from 'react';
import { Card, Col, Row, Pagination } from 'antd';
import {  EllipsisOutlined } from '@ant-design/icons';
function GoalList(){
    return(
        <div className="site-card-wrapper">
    <Row justify="center">
      <Col span={8}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card style={{ width: 300 }} title="Card title" bordered={true} actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}>
          Card content
        </Card>
      </Col>
    </Row>

    <Pagination defaultCurrent={1} total={50} />
  </div>)
}

export default GoalList;