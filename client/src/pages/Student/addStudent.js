import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Navbar from "../Navbar";
import { ADD_STUDENT_MUTATION, GET_STUDENTS } from "./Student.query";
import { GET_COURSES } from "../Course/Course.query";

const addStudent = () => {
  const [student, setStudentData] = useState({
    name: "",
    gender: "female",
    courseId: ""
  });

  const { loading, error, data } = useQuery(GET_COURSES);
  const [addStudent] = useMutation(ADD_STUDENT_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({
      variables: {
        name: student.name,
        gender: student.gender,
        courseId: student.courseId
      },
      refetchQueries: [{ query: GET_STUDENTS }]
    });
  };

  const handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    setStudentData({ ...student, [key]: val });
  };

  const renderOptionList = () => {
    if (loading) return <option value={null}>Loading</option>;
    if (error) return <option value={null}>Error found!</option>;
    if (!data.courses) return <option value={null}>No data found</option>;

    return (
      <>
        {data.courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.courseName}
          </option>
        ))}
      </>
    );
  };

  const FIELD_PROPERTY = [
    {
      type: "text",
      label: "Name",
      placeholder: "Full Name",
      name: "name",
      onChange: handleChange,
      value: student.name
    },
    {
      type: "radio",
      label: "Gender",
      name: "gender",
      items: [
        {
          type: "radio",
          name: "gender",
          value: "female",
          onChange: handleChange,
          checked: student.gender === "female"
        },
        {
          type: "radio",
          name: "gender",
          value: "male",
          onChange: handleChange,
          checked: student.gender === "male"
        }
      ]
    },
    {
      type: "select",
      name: "courseId",
      label: "Course",
      value: student.courseId,
      onChange: handleChange,
      children: renderOptionList()
    }
  ];

  const renderFields = () =>
    FIELD_PROPERTY.map(({ type, ...rest }) => (
      <div key={rest.name}>
        <div className="label">{rest.label}</div>
        <div className="content">
          {type === "text" && <input type={type} {...rest} />}
          {type === "radio" &&
            rest.items.map(({ value, ...rest }) => (
              <label key={value}>
                <input value={value} {...rest} />
                {value}
              </label>
            ))}
          {type === "select" && <select {...rest} />}
        </div>
      </div>
    ));

  return (
    <div className="form">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Navbar(addStudent);
