import React from "react";
import { graphql } from "@apollo/react-hoc";
import { GET_COURSE_BY_ID } from "./Course.query.js";

const CourseDetails = ({ id, data }) => {
  const { loading, error, course } = data;

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
        <p>{course.courseName}</p>
      </div>
      <div>
        <p className="sub-left">Teacher</p>
        <p>{course.teacher}</p>
      </div>
      <div>
        <p className="sub-left">Students:</p>
        {/* <p>{course.course.courseName}</p> */}
        {console.log(course.students)}
      </div>
    </div>
  );
};

export default graphql(GET_COURSE_BY_ID, {
  options: ({ id }) => {
    return {
      variables: {
        id
      }
    };
  }
})(CourseDetails);
