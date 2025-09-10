import express from "express";
import { Gallery } from "./models/gallery.js";
import { artworks } from "./data/artworks.js"; // Importing the artworks from the data folder

const app = express();

// vincent's art gallery
const gallery = new Gallery("Vincent's Art Gallery", 10000, 60000); // 10 kg wall capacity, 60 kg floor capacity
gallery.addListOfArtworks(artworks);

app.get("/", (req, res) => {
  res.send(`Welcome to ${gallery.name}!`);
});

// Get all artworks
// TODO

// Get artwork by title
// TODO

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
