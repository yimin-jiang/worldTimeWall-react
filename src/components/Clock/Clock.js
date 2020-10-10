import React from "react";
import Moment from "moment-timezone";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: Moment.tz(this.props.city).format("YYYY"),
      month: Moment.tz(this.props.city).format("MMM"),
      date: Moment.tz(this.props.city).format("D"),
      day: Moment.tz(this.props.city).format("ddd"),
      hour: Moment.tz(this.props.city).format("HH"),
      min: Moment.tz(this.props.city).format("mm"),
      sec: Moment.tz(this.props.city).format("ss"),
    };
  }

  updateTime() {
    setInterval(() => {
      this.setState({
        year: Moment.tz(this.props.city).format("YYYY"),
        month: Moment.tz(this.props.city).format("MMM"),
        date: Moment.tz(this.props.city).format("D"),
        day: Moment.tz(this.props.city).format("ddd"),
        hour: Moment.tz(this.props.city).format("HH"),
        min: Moment.tz(this.props.city).format("mm"),
        sec: Moment.tz(this.props.city).format("ss"),
      });
    }, 1000);
  }

  componentDidMount() {
    this.updateTime();
  }

  render() {
    const { year, month, date, day, hour, min, sec } = this.state;
    // const { country, city } = this.props;
    return (
      <h1>
        City:{this.props.city}
        Year: {year}
        Month:{month}
        Date:{date}
        Day:{day}
        Hour:{hour}
        Min:{min}
        Second:{sec}
      </h1>
    );
  }
}

export default Clock;
