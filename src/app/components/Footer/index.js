import React, { Component } from 'react'
import styles from './index.scss'
import { Layout } from 'antd'

const Footer = Layout.Footer

class _Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Footer>
          <p className={styles['footer-siteInfo']}>
            &copy;2017&nbsp;&nbsp;
            汉DEM证000001号&nbsp;&nbsp;
            汉公安网备123456789号&nbsp;&nbsp;
            <a href="http://www.dylan100.com" target="_blank" title>营业执照信息</a>
          </p>
          <p className={styles.register}><i className="icon-king"></i></p>
        </Footer>
      </footer>
    )
  }
}

export default _Footer
