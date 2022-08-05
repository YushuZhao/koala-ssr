import app from "./http";
import renderer from "./renderer";
import fs from "fs";
import path from "path";

const resolveApp = (relativePath) => path.resolve(process.cwd(), relativePath);

app.get("*", (req, res) => {
  res.send(renderer(req));
});
