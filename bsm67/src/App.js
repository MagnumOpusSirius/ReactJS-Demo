import logo from "./logo.svg";
import "./App.css";

import Hello from "./component/Hello";
import Counter from "./component/Counter";
import Form from "./component/Form";
import ClickCounterTwo from "./component/ClickCounterTwo";
import Counter1 from "./component/Counter1";
import HoverCounterTwo from "./component/HoverCounterTwo";
import HookCounterThree from "./component/HookCounterThree";
import ClassCounterOne from "./component/ClassCounterOne";
import HookCounterOne from "./component/HookCounterOne";
import DataFetch from "./DataFetch";
import Message from "./component/Message";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Sample Form</h1>
      <Form /> */}
      {/* <Greet name="Bruce"></Greet>
      <Counter1
        render={(count, increment) => (
          <ClickCounterTwo
            count={count}
            increment={increment}
          ></ClickCounterTwo>
        )}
      ></Counter1>

      <Counter1
        render={(count, increment) => (
          <HoverCounterTwo
            count={count}
            increment={increment}
          ></HoverCounterTwo>
        )}
      ></Counter1> */}
      {/* <HookCounterThree /> */}
      {/* <ClassCounterOne />
      <HookCounterOne /> */}
      {/* <DataFetch /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/hookcounter" element={<HookCounterOne />} />
      </Routes>
    </div>
  );
}

export default App;

/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
