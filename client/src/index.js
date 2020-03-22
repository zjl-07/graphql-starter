import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import StudentList from "@student/StudentList";
import addStudent from "@student/addStudent";
import CourseList from "@course/CourseList";
import addCourse from "@course/addCourse";

import "@styles/index.scss";

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
              <Route exact path="/addCourse" component={addCourse} />
            </Switch>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
