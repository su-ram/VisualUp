import React, {useEffect} from 'react';
import { Menu, Card, Col, Row, Pagination, Dropdown } from 'antd';
import { MoreOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './GoalList.module.css';

const menu = (
  <Menu>
    <Menu.Item>
        수정하기
    </Menu.Item>
    <Menu.Item>
        삭제하기
    </Menu.Item>
  </Menu>
);


function GoalList(){
    return(
      <div className ="page-set">
            <h1 className={styles.mainTitle}>홍미주 님의 목표 리스트</h1>
            <Col align="middle" className={styles.sub}><p className={styles.subSub}>본인이 계획한 모든 목표들을 한 눈에 볼 수 있어요</p></Col>
            <Row align="middle" className={styles.body} justify="center">
                <Col align="middle" className={styles.content1}>
                  <Dropdown overlay={menu}>
                    <a className={styles.icon} onClick={e => e.preventDefault()}>
                    <MoreOutlined  style={{ fontSize: '25px'}}/>
                    </a>
                  </Dropdown>
                  <p className={styles.goal}>목표 1</p>
                  <p className={styles.title}>코딩테스트 풀기</p>
                  <p className={styles.date}>2019.12.01~2020.12.31</p>
                </Col>
                <Col align="middle" className={styles.content1}>
                  <Dropdown overlay={menu}>
                    <a className={styles.icon} onClick={e => e.preventDefault()}>
                    <MoreOutlined  style={{ fontSize: '25px'}}/>
                    </a>
                  </Dropdown>
                  <p className={styles.goal}>목표 2</p>
                  <p className={styles.title}>코딩테스트 풀기</p>
                  <p className={styles.date}>2019.12.01~2020.12.31</p>
                </Col>
                <Col align="middle" className={styles.content1}>
                  <Dropdown overlay={menu}>
                    <a className={styles.icon} onClick={e => e.preventDefault()}>
                    <MoreOutlined  style={{ fontSize: '25px'}}/>
                    </a>
                  </Dropdown>
                  <p className={styles.goal}>목표 3</p>
                  <p className={styles.title}>코딩테스트 풀기</p>
                  <p className={styles.date}>2019.12.01~2020.12.31</p>
                </Col>
                <Col align="middle" className={styles.content1}>
                  <Dropdown overlay={menu}>
                    <a className={styles.icon} onClick={e => e.preventDefault()}>
                    <MoreOutlined  style={{ fontSize: '25px'}}/>
                    </a>
                  </Dropdown>
                  <p className={styles.goal}>목표 4</p>
                  <p className={styles.title}>코딩테스트 풀기</p>
                  <p className={styles.date}>2019.12.01~2020.12.31</p>
                </Col>
                    
            </Row>
            <br/><br/>
            <ul>
                <li class="num"><a href="#">&laquo;</a></li>
                <li class="active"><a href="#">1</a></li>
                <li class="num"><a href="#">2</a></li>
                <li class="num"><a href="#">3</a></li>
                <li class="num"><a href="#">4</a></li>
                <li class="num"><a href="#">5</a></li>
                <li class="num"><a href="#">&raquo;</a></li>
            </ul>
            <br/><br/>
            <button type="button" className={styles.btn}><p className={styles.font}>목표 등록하러 가기 <ArrowRightOutlined style={{ fontSize: '25px'}}/> </p> </button>
      </div>)
}

export default GoalList;