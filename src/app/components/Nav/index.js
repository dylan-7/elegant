import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import NavItem from './NavItem'
import styles from './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Menu
          mode={"horizontal"}
          className={styles.navList}
        >
          <Menu.Item className={styles.navItem}>
            <NavItem
              pathUrl='/'
              iconName='shouye'
              linkName='首页'
            />
          </Menu.Item>
          <Menu.Item className={styles.navItem}>
            <NavItem
              pathUrl='/take-out'
              iconName='canyin'
              linkName='外卖'
            />
          </Menu.Item>
          <Menu.Item className={styles.navItem}>
            <NavItem
              pathUrl='/brand'
              iconName='shangjia'
              linkName='精选品牌'
            />
          </Menu.Item>
          <Menu.Item className={styles.navItem}>
            <NavItem
              pathUrl='/hotel'
              iconName='zhusu'
              linkName='酒店'
            />
          </Menu.Item>
        </Menu>
      </nav>
    )
  }
}
