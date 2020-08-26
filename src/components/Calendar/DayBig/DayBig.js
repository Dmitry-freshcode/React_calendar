import React from 'react';
import moment from 'moment';
import styles from './DayBig.module.css';

export default function DayBig() {
  const day = moment().date();
  const dayOfWeek = moment().format('dddd');
  const month = moment().format('MMMM');
  const year = moment().year();
  return (
    <div className={styles.container}>
      <p className={styles.dayOfWeek}>{dayOfWeek.toUpperCase()}</p>
      <p className={styles.day}>{day}</p>
      <p className={styles.monthYear}>{month + ' ' + year}</p>
    </div>
  );
}
