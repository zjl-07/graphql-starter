import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import { GET_COURSES } from "./Course.query";
import CourseDetails from "./CourseDetails";

const CourseList = ({ data }) => {
  const { loading, error, courses } = data;
  const [selected, setSelected] = useState(null);

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!courses) return <div>Not Found!</div>;

  return (
    <>
      <div className="left container">
        {courses.map((course) => (
          <div className="left-card" key={course.id}>
            <div>
              <span>{course.courseName}</span>
            </div>
            <button onClick={() => setSelected(course.id)}>view details</button>
          </div>
        ))}
      </div>
      <div className="right-container">
        <CourseDetails id={selected} />
      </div>
    </>
  );
};

export default graphql(GET_COURSES)(CourseList);
