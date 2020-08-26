import React from 'react';
import styles from './Name.module.css';

export default function Name(props) {
  const { name } = props;
  return <div className={styles.name}>{name}</div>;
}
