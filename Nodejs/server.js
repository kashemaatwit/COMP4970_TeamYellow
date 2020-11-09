require("dotenv").config();
const express = require("express");
const app = express();
const roomRouter = require("./api/room/room.router");


app.use(express.json());

app.use("/api/room", roomRouter);
const port = process.env.PORT || 4000;;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});