import React from "react";
import { graphql } from "@apollo/react-hoc";
import { GET_COURSE_BY_ID } from "./Course.query.js";

const CourseDetails = ({ id, data }) => {
  const { loading, error, course } = data;

  if (!id) return <>Click one of the course name provided to see the details</>;

  if (loading) return <div>Loading..</div>;
  if (error) return <div>ERROR</div>;
  if (!course) return <div>Not found! </div>;

  return (
    <>
      <div className="flex-container">
        <p className="sub-left">Name</p>
        <p>{course.courseName}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Teacher</p>
        <p>{course.teacher}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Students:</p>
        <p>
          {course.students.map((student) => (
            <li key={student.id}>
              {student.name}_{student.gender}
            </li>
          ))}
        </p>
      </div>
    </>
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
