import gql from "graphql-tag";

export const GET_COURSES = gql`
  {
    courses {
      id
      courseName
    }
  }
`;
export const GET_COURSE_BY_ID = gql`
  query Course($id: ID!) {
    course(id: $id) {
      id
      courseName
      teacher
      students {
        id
        name
        gender
      }
    }
  }
`;
