import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Navbar from "../Navbar";
import { ADD_COURSE_MUTATION, GET_COURSES } from "./Course.query";

const addCourse = () => {
  const [course, setCourseData] = useState({
    courseName: "",
    teacher: ""
  });

  const [addCourse] = useMutation(ADD_COURSE_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({
      variables: {
        courseName: course.courseName,
        teacher: course.teacher
      },
      refetchQueries: [{ query: GET_COURSES }]
    });
  };

  const handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    setCourseData({ ...course, [key]: val });
  };

  const FIELD_PROPERTY = [
    {
      type: "text",
      label: "Course Name",
      placeholder: "Course Name",
      name: "courseName",
      onChange: handleChange,
      value: course.courseName
    },
    {
      type: "text",
      label: "Teacher Name",
      placeholder: "Teacher Name",
      name: "teacher",
      onChange: handleChange,
      value: course.teacher
    }
  ];

  const renderFields = () =>
    FIELD_PROPERTY.map(({ type, ...rest }) => (
      <div key={rest.name}>
        <div className="label">{rest.label}</div>
        <div className="content">
          {type === "text" && <input type={type} {...rest} />}
        </div>
      </div>
    ));

  return (
    <div className="form">
      <h3>Add New Course</h3>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Navbar(addCourse);
