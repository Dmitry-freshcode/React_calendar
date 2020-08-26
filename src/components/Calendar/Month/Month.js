import React from 'react';
import moment from 'moment';
import Week from '../Week/Week';
import Names from '../Names/Names';
import styles from './Month.module.css';

export default function Month(props) {
  const { plus, minus, date, weeks } = props;

  const mapWeeks = (week, index) => {
    return <Week key={index} week={week} date={date} />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.month}>
        {moment(date).format('MMMM').toUpperCase() + '   ' + date.year()}{' '}
      </div>
      <div className={styles.calendarWrapper}>
        <div className={styles.arrowLeft} onClick={minus} />
        <div className={styles.calendar}>
          <Names />
          {weeks.map(mapWeeks)}
        </div>
        <div className={styles.arrowRight} onClick={plus} />
      </div>
    </div>
  );
}
