import React from 'react';
import Name from '../Name/Name';
import styles from './Names.module.css';

export default function Names() {
  const names = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  function mapNames(name, index) {
    return <Name key={index} name={name} />;
  }
  return <div className={styles.names}>{names.map(mapNames)}</div>;
}
