import React, { Component } from "react";
import { graphql } from "@apollo/react-hoc";
import { withRouter } from "react-router-dom";
import { GET_COURSES } from "./Course.query";
import CourseDetails from "./CourseDetails";
import Navbar from "../Navbar";

@Navbar
@withRouter
@graphql(GET_COURSES)
export default class CourseList extends Component {
  state = {
    selected: null
  };

  handleSelectedClick = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const { loading, courses, error } = this.props.data;
    const { history } = this.props;

    if (loading) return <div>Loading..</div>;
    if (error) return <div>ERROR</div>;
    if (!courses) return <div>Not found! </div>;

    return (
      <>
        <div className="left container">
          <button onClick={() => history.push("/addCourse")}>
            Add New Courses
          </button>
          {courses.map((course) => (
            <div key={course.id} className="left-card">
              <div>
                <span>{course.courseName}</span>
              </div>
              <button onClick={() => this.handleSelectedClick(course.id)}>
                view details
              </button>
            </div>
          ))}
        </div>
        <div className="right container">
          <CourseDetails id={this.state.selected} />
        </div>
      </>
    );
  }
}
