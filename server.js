const express = require("express");
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//   app.use(routes);

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on http://localhost:3000 ${PORT}!`);
  });