import React from 'react';
import styles from './HashTag.module.css';
import { Col, Row, Progress } from 'antd';

function HashTag(){
    return(
        <div>
            <h1 className={styles.mainTitle}>#취업준비</h1>
            <Col align="middle" className={styles.sub}><p className={styles.subSub}>해시태그 검색 결과입니다.</p></Col>
            <Row align="middle" className={styles.body}>
                <Col align="middle" className={styles.content1}>
                    <p className={styles.name}>권은찬 님</p>
                    <div className={styles.graph} style={{ width: 200 }}>
                        <Progress percent={30} size="small" />
                        <Progress percent={50} size="small" status="active" />
                        <Progress percent={70} size="small" status="exception" />
                        <Progress percent={100} size="small" />
                    </div>
                    <p className={styles.title}>코딩테스트 풀기</p>
                    <p className={styles.date}>2019.12.01~2020.12.31</p>
                </Col>
                <Col align="middle" className={styles.content2}>
                    <p className={styles.name}>김소은 님</p>
                    <div className={styles.graph} style={{ width: 200 }}>
                        <Progress percent={30} size="small" />
                        <Progress percent={50} size="small" status="active" />
                        <Progress percent={70} size="small" status="exception" />
                        <Progress percent={100} size="small" />
                    </div>
                    <p className={styles.title}>Spring 공부</p>
                    <p className={styles.date}>2018.10.31~2021.10.20</p>
                </Col>
                <Col align="middle" className={styles.content3}>
                    <p className={styles.name}>문근철 님</p>
                    <div className={styles.graph} style={{ width: 200 }}>
                        <Progress percent={30} size="small" />
                        <Progress percent={50} size="small" status="active" />
                        <Progress percent={70} size="small" status="exception" />
                        <Progress percent={100} size="small" />
                    </div>
                    <p className={styles.title}>알고리즘 공부</p>
                    <p className={styles.date}>2020.01.21~2021.12.31</p>
                </Col>
            </Row> <br/><br/>
            <ul>
                <li class="num"><a href="#">&laquo;</a></li>
                <li class="active"><a href="#">1</a></li>
                <li class="num"><a href="#">2</a></li>
                <li class="num"><a href="#">3</a></li>
                <li class="num"><a href="#">4</a></li>
                <li class="num"><a href="#">5</a></li>
                <li class="num"><a href="#">&raquo;</a></li>
            </ul>
        </div>
    );
}

export default HashTag;