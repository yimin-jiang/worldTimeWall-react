import React from 'react';
import Moment from 'moment-timezone';

class Clock extends React.Component {
    constructor() {

        super();
        this.state = {
            year: Moment.tz('Australia/Adelaide').format('YYYY'),
            month: Moment.tz('Australia/Adelaide').format('MMM'),
            date: Moment.tz('Australia/Adelaide').format('D'),
            day: Moment.tz('Australia/Adelaide').format('ddd'),
            hour: Moment.tz('Australia/Adelaide').format('HH'),
            min: Moment.tz('Australia/Adelaide').format('mm'),
            sec: Moment.tz('Australia/Adelaide').format('ss')

        }
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                year: Moment.tz('Australia/Adelaide').format('YYYY'),
                month: Moment.tz('Australia/Adelaide').format('MMM'),
                date: Moment.tz('Australia/Adelaide').format('D'),
                day: Moment.tz('Australia/Adelaide').format('ddd'),
                hour: Moment.tz('Australia/Adelaide').format('HH'),
                min: Moment.tz('Australia/Adelaide').format('mm'),
                sec: Moment.tz('Australia/Adelaide').format('ss')
            })
        },
            1000);

    }

    componentDidMount() {
        this.updateTime();
    }



    render() {
        const { year, month, date, day, hour, min, sec } = this.state;
        // const { country, city } = this.props;
        return (
            <h1>Year: {year}
            Month:{month}
            Date:{date}
            Day:{day}
            Hour:{hour}
            Min:{min}
            Second:{sec}
            </h1>);
    }


}

export default Clock;