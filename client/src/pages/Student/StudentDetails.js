import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import { GET_STUDENT_BY_ID } from "./Student.query.js";

function StudentDetails({ id, data }) {
  const { loading, error, student } = data;

  if (!id)
    return (
      <div className="right-container">
        Click one of the name provided to see the details
      </div>
    );

  if (loading) return <div>Loading..</div>;
  if (error) return <div>ERROR</div>;
  if (!student) return <div>Not found! </div>;

  return (
    <div className="right container">
      <div>
        <p className="sub-left">Name</p>
        <p>{student.name}</p>
      </div>
      <div>
        <p className="sub-left">Gender</p>
        <p>{student.gender}</p>
      </div>
      <div>
        <p className="sub-left">Course</p>
        <p>{student.course.courseName}</p>
      </div>
      <div>
        <p className="sub-left">Course Teacher</p>
        <p>{student.course.teacher}</p>
      </div>
    </div>
  );
}

export default graphql(GET_STUDENT_BY_ID, {
  options: ({ id }) => {
    return {
      variables: {
        id
      }
    };
  }
})(StudentDetails);
