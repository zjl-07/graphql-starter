import React, { Component } from "react";
import ReactDOM from "react-dom";

import StudentList from "./pages/StudentList/StudentList";

import "./index.scss";

class App extends Component {
  render() {
    return (
      <div className="body-container">
        <StudentList />
        <div className="detail-container">Details Goes Here!</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
