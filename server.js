import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { films, newestFilms, popularFilms, projects, tvShows } from "./data.js";
import getData from "./getData.js";
import getDataById from "./getDataById.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

getData(app, "/projects", projects);

getDataById(app, "/projects/:id", projects);

getData(app, "/popular-films", popularFilms);

getData(app, "/films", films);

getData(app, "/tv-shows", tvShows);

getData(app, "/newest-films", newestFilms);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`API is running`);
});
