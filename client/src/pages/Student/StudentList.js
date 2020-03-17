import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import { GET_STUDENTS } from "./Student.query.js";
import StudentDetails from "./StudentDetails.js";

const StudentList = ({ data }) => {
  const { loading, students, error } = data;
  const [selected, setSelected] = useState(null);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>ERROR</div>;
  if (!students) return <div>Not found! </div>;

  return (
    <>
      <div className="left container">
        {students.map((student) => (
          <div key={student.id} className="left-card">
            <div>
              <span>{student.name}</span>
            </div>
            <button onClick={() => setSelected(student.id)}>
              view details
            </button>
          </div>
        ))}
      </div>
      <div className="right-container">
        <StudentDetails id={selected} />
      </div>
    </>
  );
};

export default graphql(GET_STUDENTS)(StudentList);
