import React, { Component } from 'react';
import moment from 'moment';
import DayBig from './DayBig/DayBig';
import Month from './Month/Month';
import reset from './reset.css'; // eslint-disable-line no-unused-vars
import styles from './index.module.css';
import ru from 'moment/locale/ru'; // eslint-disable-line no-unused-vars
moment.locale('ru');

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //date: moment('03-3-2020', 'MM-DD-YYYY'),
      date: moment(),
    };
  }

  getWeeks = () => {
    const firstWeek = moment(this.state.date).startOf('month');
    const lastWeek = moment(this.state.date).endOf('month');
    const weeks = [];
    while (moment(lastWeek).isSameOrAfter(firstWeek, 'week')) {
      weeks.push(moment(firstWeek));
      firstWeek.add(1, 'w');
    }
    return weeks;
  };

  callBackPlus = () => {
    let state = this.state.date;
    state = moment(state).add(1, 'month');
    this.setState({ date: state });
  };

  callBackMinus = () => {
    let state = this.state.date;
    state = moment(state).subtract(1, 'month');
    this.setState({ date: state });
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <DayBig />
        <Month
          plus={this.callBackPlus}
          minus={this.callBackMinus}
          date={this.state.date}
          weeks={this.getWeeks()}
        />
      </div>
    );
  }
}
