import React from "react";
import ClockBar from "./components/ClockBar/ClockBar";
import BlockTop from "./components/BlockTop/BlockTop";
import "./ClockSticker.css";

class ClockSticker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.arr = this.props.city.split("/");
    this.title = this.arr[this.arr.length - 1].replace(/_/g, " ");

    return (
      <div className='block'>
        <h1 className='title'>{this.title}</h1>
        <BlockTop city={this.props.city} />
        <ClockBar city={this.props.city} />
      </div>
    );
  }
}

export default ClockSticker;
