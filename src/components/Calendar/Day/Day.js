import React from 'react';
import moment from 'moment';
import styles from './Day.module.css';

export default function Day(props) {
  const { day, date } = props;

  let classList = styles.day;

  if (moment().isSame(day, 'day')) {
    classList = classList + ' ' + styles.big;
  }

  if (!moment(day).isSame(date, 'month')) {
    classList = classList + ' ' + styles.grey;
  }

  return <div className={classList}>{day.format('D')}</div>;
}
