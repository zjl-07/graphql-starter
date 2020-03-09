const express = require("express");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

mongoose.connect(
  "mongodb+srv://emilda:kaisdh9898@cluster0-s6dtr.mongodb.net/test",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen("4000", () => console.log("app listening at post 4000"));
