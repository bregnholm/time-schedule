import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

import moment from 'moment';
import "holderjs";
import Goals from './Goals';

class Schedule extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      logHours: false, workDays: [], hourlyPrice: 0,
    }
  }


  componentDidMount(nextProps) {
    this.update();
  }

  logHours = () => {
    this.setState({ logHours: !this.state.logHours })
  }



getDuration(hours) {
  const inMS = hours * 60 * 60 * 1000;
    const duration = moment.duration(inMS)._data;
    return {
      ...duration,
      hours: (duration.days > 0 ? duration.days : 1) * duration.hours
    }
}

  workList = () => {
    const {workDays} = this.state;
    return workDays.map((workday) => {
      const duration = this.getDuration(workday.hours);
      return (<div className="registeredTime"> 
        <span>{workday.date}</span>
        <span>{duration.hours} hours {duration.minutes > 0 ? ` ${duration.minutes} minutes` : null}</span>
      </div>);
    }            
)
  }

  update = () => {
    for(var i =0; i < localStorage.length; i++){
      const currentKey = localStorage.key(i);
      if(currentKey.includes('schedule.')) {
        this.setState({[currentKey.split('schedule.').pop()]: JSON.parse(localStorage.getItem(currentKey))});
      }
    }
  }

  render() {
    const {workDays, logHours, hourlyPrice} = this.state;
    console.log({workDays});
    const timeSpent = this.getDuration(workDays.reduce((acc, {hours}) => {
      return Number(acc) + Number(hours);
    }, 0));

    const earnings = workDays.reduce((acc, {hours}) => {
      return Number(acc) + Number(hours);
    }, 0) * hourlyPrice;

    console.log(timeSpent);
    return (
      <>
      <header className="schedule">
        Time Schedule
        <Button onClick={this.logHours} variant="success"> </Button>
        </header>

        <main>
          <Goals open={logHours} update={this.update}/>
          <div className="earnings">
            <div>
              <h1>Time spent</h1>
              <span>{timeSpent.hours} hours {timeSpent.minutes > 0 ? ` ${timeSpent.minutes} minutes` : null}</span>
            </div>
            <div>
              <h1>Earnings</h1>
              <span>{Number(earnings).toFixed(2)} kr</span>
            </div>
          </div>
          <div>
            {this.workList()}
          </div>

        </main>
        </>
    );
  }
}
export default Schedule;