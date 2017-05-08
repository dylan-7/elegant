import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.scss'

export default class NavItem extends Component {
  render() {
    const { pathUrl, iconName, linkName, ...rest } = this.props
    const iName = `icon-${ iconName }`;

    return (
      <NavLink
        {...rest}
        exact
        to={pathUrl}
        activeClassName={styles.active}
        className={styles.navLink}
      >
        <i className={iName + ' ' + styles['navItem-icon']}></i>
        <span>{linkName}</span>
      </NavLink>
    )
  }
}
