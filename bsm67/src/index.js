import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; //import the browser router

const root = ReactDOM.createRoot(document.getElementById("root")); //send the root to the react dom
root.render(
  // jsx --view/ in react view and controller will be put in a single file -- .js
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from "react-dom";

// const elem = React.createElement('div', '',
// React.createElement('h1', '', React.createElement('p', '', 'Hello World!')));

// const users=[
//   {id:1, name:'John', age:22},
//   {id:2, name:'Mike', age:32},
//   {id:3, name:'Jane', age:42},
// ];
// const elem2 = React.createElement('ul', '',
// users.map((user)=>{
//   return React.createElement('li','', user.id + ' ' + user.name + ' ' + user.age)
//   }));

// ReactDOM.render(elem3, document.getElementById('root')); //jsx - view

/*
<div>
  <h1>
    <p>Hello World!</p>
  </h1>
</div>
*/
