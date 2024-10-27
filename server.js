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

getData(app, "/api/projects", projects);

getDataById(app, "/api/projects/:id", projects);

getData(app, "/api/popular-films", popularFilms);

getData(app, "/api/films", films);

getData(app, "/api/tv-shows", tvShows);

getData(app, "/api/newest-films", newestFilms);

app.get("/", (req, res) => {
  res.send(`
    <div>
      <h1>Welcome to Custom API</h1>
      <p style="font-size: 25px">Available Categories:</p>
      <ul style="font-size: 20px">
        <li>
          <a href="/api/projects">projects</a>
        </li>
        <li>
          <a href="/api/projects/:id">projects:id</a>
        </li>
        <li>
          <a href="/api/popular-films">popular-films</a>
        </li>
        <li>
          <a href="/api/films">films</a>
        </li>
        <li>
          <a href="/api/tv-shows">tv-shows</a>
        </li>
        <li>
          <a href="/api/newest-films">newest-films</a>
        </li>
        </ul>
    </div>
  `);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`API is running`);
});
