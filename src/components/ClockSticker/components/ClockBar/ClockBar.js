import React from "react";
import "./ClockBar.css";
import Moment from "moment-timezone";

class ClockBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: Moment.tz(this.props.city).format("HH"),
      min: Moment.tz(this.props.city).format("mm"),
      sec: Moment.tz(this.props.city).format("ss"),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        hour: Moment.tz(this.props.city).format("HH"),
        min: Moment.tz(this.props.city).format("mm"),
        sec: Moment.tz(this.props.city).format("ss"),
      });
    }, 1000);
  }

  render() {
    const { hour, min, sec } = this.state;
    return (
      <div className='block_bar'>
        <div className='clock hour'>{hour}</div>
        <div className='clock minute'>{min}</div>
        <div className='clock second'>{sec}</div>
      </div>
    );
  }
}

export default ClockBar;
