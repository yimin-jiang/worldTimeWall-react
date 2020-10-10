import React from "react";
import "./BlockTop.css";
import Moment from "moment-timezone";

class BlockTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: Moment.tz(this.props.city).format("YYYY"),
      month: Moment.tz(this.props.city).format("MMM"),
      date: Moment.tz(this.props.city).format("D"),
      day: Moment.tz(this.props.city).format("ddd"),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        year: Moment.tz(this.props.city).format("YYYY"),
        month: Moment.tz(this.props.city).format("MMM"),
        date: Moment.tz(this.props.city).format("D"),
        day: Moment.tz(this.props.city).format("ddd"),
      });
    }, 1000);
  }

  render() {
    const { year, month, date, day } = this.state;
    return (
      <div className='block_tp'>
        <div className='day space-right'>{day}</div>
        <div className='month space-right'>{month}</div>
        <div className='date space-right'>{date}</div>
        <div className='year'>{year}</div>
      </div>
    );
  }
}
export default BlockTop;
