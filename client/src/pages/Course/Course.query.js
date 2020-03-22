import gql from "graphql-tag";

const GET_COURSES = gql`
  {
    courses {
      id
      courseName
    }
  }
`;
const GET_COURSE_BY_ID = gql`
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

const ADD_COURSE_MUTATION = gql`
  mutation AddCourse($courseName: String!, $teacher: String!) {
    addCourse(courseName: $courseName, teacher: $teacher) {
      courseName
    }
  }
`;

export { GET_COURSES, GET_COURSE_BY_ID, ADD_COURSE_MUTATION };
