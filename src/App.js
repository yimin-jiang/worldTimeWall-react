import React from "react";
import "./App.css";
import Block from "./components/Block/Block";
import Clock from "./components/Clock";
import ClockSticker from "./components/ClockSticker/ClockSticker";

const App = () => (
  // <Clock city='Australia/Adelaide' />
  // <Block />
  <>
    <ClockSticker city='Australia/Sydney' />
    <ClockSticker city='America/New_York' />
    <ClockSticker city='Europe/London' />
    <ClockSticker city='Asia/Seoul' />
  </>
);

export default App;
