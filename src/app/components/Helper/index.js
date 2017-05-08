import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.scss'
import { Row, Col } from 'antd'

export default class Helper extends Component {
  render () {
    return (
      <section className={styles.helper}>
        <Row type="flex" justify="space-between">
          <Col className={styles['helper-item']} span='4'>
            <dl>
              <dt className={styles.title}>用户帮助</dt>
              <dd>
                <Link to='/' className={styles.link}>常见团购问题</Link>
              </dd>
              <dd>
                <Link to='/' className={styles.link}>开放API</Link>
              </dd>
            </dl>
          </Col>
          <Col className={styles['helper-item']} span='4'>
            <dl>
              <dt className={styles.title}>手机小乐助手</dt>
              <dd>
                <Link to='/' className={styles.link}>小乐触屏版</Link>
              </dd>
              <dd>
                <Link to='/' className={styles.link}>下载手机版</Link>
              </dd>
            </dl>
          </Col>
          <Col className={styles['helper-item']} span='4'>
            <dl>
              <dt className={styles.title}>商务合作</dt>
              <dd>
                <Link to='/' className={styles.link}>友情链接</Link>
              </dd>
              <dd>
                <Link to='/' className={styles.link}>市场合作</Link>
              </dd>
            </dl>
          </Col>
          <Col className={styles['helper-item']} span='4'>
            <dl>
              <dt className={styles.title}>公司信息</dt>
              <dd>
                <Link to='/' className={styles.link}>关于山水集团 </Link>
              </dd>
              <dd>
                <Link to='/' className={styles.link}>小乐微博</Link>
              </dd>
              <dd>
                <Link to='/' className={styles.link}>违规投诉&廉政举报</Link>
              </dd>
            </dl>
          </Col>
          <Col className={styles['helper-item']} span='4'>
            <dl>
              <dt className={styles.title}>4006-123-123</dt>
              <dd className={styles.phone}>
                <span>周一至周日 9:00-22:00</span>
              </dd>
              <dd>
                <span className={styles.phone}>客服电话 免长途费</span>
              </dd>
            </dl>
          </Col>
        </Row>
      </section>
    )
  }
}
