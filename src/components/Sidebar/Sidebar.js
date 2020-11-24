// @flow
import React from 'react';
import styles from './Sidebar.module.scss';


const Sidebar = props => {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
