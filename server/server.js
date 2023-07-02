require("dotenv").config();
const express = require("express");
const todoRouter = require("./routes/todos");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/todos", todoRouter);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}!!!`);
});
