"use strict";

const express = require("express");
const app = express();

// 라우터 등록
const home = require("./routes/home")

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use = 미들웨어 등록

module.exports = app;