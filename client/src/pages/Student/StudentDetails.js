import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_STUDENT_BY_ID } from "@student/Student.query.js";

function StudentDetails({ id }) {
  const { loading, error, data } = useQuery(GET_STUDENT_BY_ID, {
    variables: { id }
  });
  if (!id) return <>Click one of the name provided to see the details</>;

  if (loading) return <div>Loading..</div>;
  if (error) return <div>ERROR</div>;
  if (!data.student) return <div>Not found! </div>;

  return (
    <>
      <div className="flex-container">
        <p className="sub-left">Name</p>
        <p>{data.student.name}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Gender</p>
        <p>{data.student.gender}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Course</p>
        <p>{data.student.course.courseName}</p>
      </div>
      <div className="flex-container">
        <p className="sub-left">Course Teacher</p>
        <p>{data.student.course.teacher}</p>
      </div>
    </>
  );
}

export default StudentDetails;
