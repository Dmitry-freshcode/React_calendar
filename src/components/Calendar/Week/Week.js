import React from 'react';
import Day from '../Day/Day';
import moment from 'moment';
import styles from './Week.module.css';

export default function Week(props) {
  const { week, date } = props;

  const creatDays = () => {
    let day = moment(week).startOf('week');
    const days = [];
    for (let i = 0; i <= 6; i++) {
      days[i] = moment(day);
      day.add(1, 'd');
    }
    return days;
  };

  function mapWeek(day, index) {
    return <Day key={index} day={day} date={date} />;
  }

  let weekDays = creatDays();

  return <div className={styles.week}>{weekDays.map(mapWeek)}</div>;
}
