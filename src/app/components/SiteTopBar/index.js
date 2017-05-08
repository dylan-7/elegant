import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Icon } from 'antd'
import styles from './index.scss'

export default class SiteTopBar extends Component {

  render () {
    return (
      <section className={`${styles.siteTopBar} page-w`}>
        <Row>
          <Col span="6" className={styles['stb-left']}>
            <ul>
              <li className={styles['stb-item']}>
                <span className={styles['item-title']}>曼哈顿</span>
              </li>
              <li className={styles['stb-item']}>
                <Link to="/citylist" className={styles['item-title']}>
                  切换城市<Icon type="down" />
                </Link>
              </li>
            </ul>
          </Col>
          <Col span="18" className={styles['stb-right']}>
            <ul className={styles['stb-list']}>
              <li className={styles['stb-item']}>
                <Link to="/log-in" className={styles['item-title']}>登录</Link>
              </li>
              <li className={styles['stb-item']}>
                <Link to="/sign-up" className={styles['item-title']}>注册</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    )
  }
}
