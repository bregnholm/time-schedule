import React from 'react';
import './index.css';
import moment from 'moment';

class Goals extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      endGoal: 3000, 
      hourlyPrice: 150,
      workDays: [],
      addDay: false, 
    }
  }

  inputField = (e) => {
    switch (e.target.name) {
      case 'hourlyPrice':
        this.setState({[e.target.name]: e.target.value});
        localStorage.setItem(`schedule.${e.target.name}`, e.target.value);
        break;
      default:
        const date = e.target.name;
        const workDay = { date, hours: e.target.value };
        
        const { workDays } = this.state;
        const curr = workDays.find(({date}) => workDay.date === date);
        console.log(curr, workDay)
        curr.hours = workDay.hours;
    
        this.setState({workDays});
        localStorage.setItem(`schedule.workDays`, JSON.stringify(workDays));
        break;
    }
    this.props.update();
  }

  componentDidMount(nextProps) {
    for(var i =0; i < localStorage.length; i++){
      const currentKey = localStorage.key(i);
      if(currentKey.includes('schedule.')) {
        this.setState({[currentKey.split('schedule.').pop()]: JSON.parse(localStorage.getItem(currentKey))});
      }

    }
  }

dayOfWork = () => {
  const {workDays} = this.state;
  return workDays.sort((a, b) => a.date - b.date).map(workDay =>(
    <div className="dayofWalk"> 
      <span>{workDay.date}</span>
      <input name={workDay.date} onChange={this.inputField} value={workDay.hours} type="number" pattern="[0-9]*" />
    </div>
  ));
}

addDay = () => {
  this.setState({addDay: !this.state.addDay });
}

add = (e)=> {
  e.preventDefault();
  const workDay = { date: e.target.date.value, hours: e.target.hours.value };


  const { workDays } = this.state;
  const curr = workDays.find(({date}) => workDay.date === date);

  if (curr) {
    curr.hours = workDay.hours;
  } else {
    workDays.push(workDay);

  }

  this.setState({workDays});
  localStorage.setItem(`schedule.workDays`, JSON.stringify(workDays));
  this.addDay();
}

  render() {
    return (
        <div className={`goals ${this.props.open ? 'open': ''}`}>
          <div>
            <span>Hourly price</span>
            <input name={'hourlyPrice'} onChange={this.inputField} value={this.state.hourlyPrice} type="number" pattern="[0-9]*" />
          </div>
          <hr></hr>
          <div onClick={this.addDay}>Add</div>
          {this.state.addDay ? 
              <div className="dayofWalk"> 
              <form name="addDay" onSubmit={this.add}>
              <input type="submit" value="Add day" />
                <input name='hours' defaultValue={0} type="number" pattern="[0-9]*" />
                <input name='date' defaultValue={moment().format('Y-MM-DD')} max={moment().format('Y-MM-DD')} type="date" />
              </form>
  </div> : null }
          {this.dayOfWork()}
        </div>
    );
  }
}
export default Goals;
