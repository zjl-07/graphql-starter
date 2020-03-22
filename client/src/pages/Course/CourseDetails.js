import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_COURSE_BY_ID } from "./Course.query.js";

const CourseDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: { id }
  });

  if (!id) return <>Click one of the course name provided to see the details</>;

  if (loading) return <div>Loading..</div>;
  if (error) return <div>ERROR</div>;
  if (!data.course) return <div>Not found! </div>;

  return (
    <>
      <div className="flex-container">
        <p className="sub-left">Name</p>
        <p>{data.course.courseName}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Teacher</p>
        <p>{data.course.teacher}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Students:</p>
        <p>
          {data.course.students.map((student) => (
            <li key={student.id}>
              {student.name}_{student.gender}
            </li>
          ))}
        </p>
      </div>
    </>
  );
};

export default CourseDetails;
