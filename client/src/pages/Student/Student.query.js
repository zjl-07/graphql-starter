import gql from "graphql-tag";

export const GET_STUDENTS = gql`
  {
    students {
      id
      name
      gender
    }
  }
`;

export const GET_STUDENT_BY_ID = gql`
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
