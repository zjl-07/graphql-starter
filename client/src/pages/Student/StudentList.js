import React, { Component } from "react";
import { graphql } from "@apollo/react-hoc";
import { withRouter } from "react-router-dom";
import { GET_STUDENTS } from "./Student.query.js";
import StudentDetails from "./StudentDetails.js";
import Navbar from "../Navbar";

@Navbar
@withRouter
@graphql(GET_STUDENTS)
export default class StudentList extends Component {
  state = {
    selected: null
  };

  handleSelectedClick = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const { loading, students, error } = this.props.data;
    const { history } = this.props;

    if (loading) return <div>Loading..</div>;
    if (error) return <div>ERROR</div>;
    if (!students) return <div>Not found! </div>;

    return (
      <>
        <div className="left container">
          <button onClick={() => history.push("/addStudent")}>
            Add New Student
          </button>
          {students.map((student) => (
            <div key={student.id} className="left-card">
              <div>
                <span>{student.name}</span>
              </div>
              <button onClick={() => this.handleSelectedClick(student.id)}>
                view details
              </button>
            </div>
          ))}
        </div>
        <div className="right container">
          <StudentDetails id={this.state.selected} />
        </div>
      </>
    );
  }
}
