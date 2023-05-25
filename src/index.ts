import "./loadEnvironment.js";
import createDebug from "debug";
import chalk from "chalk";
import app from "./server/index.js";

const debug = createDebug("extintores-api:");

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
});
