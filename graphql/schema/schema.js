const graphql = require("graphql");
const Student = require("../models/student");
const Course = require("../models/course");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;

const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    course: {
      type: CourseType,
      resolve(parent, args) {
        return Course.findById(parent.courseId);
      }
    }
  })
});

const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLID },
    courseName: { type: GraphQLString },
    teacher: { type: GraphQLString },
    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        return Student.find({ courseId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    student: {
      type: StudentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Student.findById(args.id);
      }
    },

    course: {
      type: CourseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Course.findById(args.id);
      }
    },

    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        return Student.find();
      }
    },
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return Course.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCourse: {
      type: CourseType,
      args: {
        courseName: { type: GraphQLString },
        teacher: { type: GraphQLString }
      },
      resolve(parent, args) {
        let course = new Course({
          courseName: args.courseName,
          teacher: args.teacher
        });

        return course.save();
      }
    },
    addStudent: {
      type: StudentType,
      args: {
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        courseId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let student = new Student({
          name: args.name,
          gender: args.gender,
          courseId: args.courseId
        });

        return student.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
