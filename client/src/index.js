import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import StudentList from "./pages/Student/StudentList";
import CourseList from "./pages/Course/CourseList";
import addStudent from "./pages/Student/addStudent";

import "./styles/index.scss";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div className="body-container">
            <Switch>
              <Route exact path="/" component={StudentList} />
              <Route exact path="/courses" component={CourseList} />
              <Route exact path="/addStudent" component={addStudent} />
            </Switch>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
