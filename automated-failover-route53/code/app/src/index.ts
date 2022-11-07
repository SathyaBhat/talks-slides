import express, { Request, Application, Response, request } from "express";
import { getRegion } from "./aws";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send({ data: "Hello!", app });
});

app.get("/commday", (req, res) => {
  res.status(200).send(getRegion());
});

app.get("/healthz", (req, res) => {
  res.status(200).send({ data: "Healthy!", app });
});

process.on("SIGINT", () => {
  console.log("Stopping ...");
  server.close(() => {
    console.log("Stopped");
  });
});

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);
