import gql from "graphql-tag";

const GET_STUDENTS = gql`
  {
    students {
      id
      name
      gender
    }
  }
`;

const GET_STUDENT_BY_ID = gql`
  query Student($id: ID!) {
    student(id: $id) {
      id
      name
      gender
      course {
        id
        courseName
        teacher
      }
    }
  }
`;

const ADD_STUDENT_MUTATION = gql`
  mutation AddStudent($name: String!, $gender: String!, $courseId: ID!) {
    addStudent(name: $name, gender: $gender, courseId: $courseId) {
      name
      gender
    }
  }
`;

export { GET_STUDENTS, GET_STUDENT_BY_ID, ADD_STUDENT_MUTATION };
