import { Artwork } from "./artwork.js";

/**
 * Represents a gallery.
 * @class
 */
export class Gallery {
  /**
   * Creates a new gallery.
   */
  constructor(name, displayWallWeightCapacity, displayFloorWeightCapacity) {
    this.name = name;
    this.artworks = [];
    this.displayWallWeightCapacity = displayWallWeightCapacity; // Maximum weight that can be displayed on the wall in grams
    this.displayFloorWeightCapacity = displayFloorWeightCapacity; // Maximum weight that can be displayed on the floor in grams
    this.maxCarryWeight = 10000; // Maximum weight that can be carried by a person in grams - 10 kg
  }

  /**
   * @function addArtwork
   * @param {string} title - The title of the painting.
   * @param {string} artist - The artist who created the painting.
   * @param {number} year - The year the painting was created.
   * @param {number} weight - The weight of the painting in grams.
   * @description Function to add a new artwork to the gallery.
   */
  addArtwork(title, artist, year, weight) {
    if (this.artworks.some((artwork) => artwork.title === title)) {
      console.log(`Artwork with title ${title} already exists in the gallery.`);
      throw new Error(
        `Artwork with title ${title} already exists in the gallery.`,
      );
    }
    let artwork = new Artwork(title, artist, year, weight);
    this.artworks.push(artwork);
  }

  /**
    * @function addListOfArtworks
    * @param {Array} artworks - An array of artworks to be added to the gallery.
    * @description Function to add a list of artworks to the gallery.
    a list of artworks to the gallery.
  */
  addListOfArtworks(artworks) {
    artworks.forEach((artwork) => {
      this.addArtwork(
        artwork.title,
        artwork.artist,
        artwork.year,
        artwork.weight,
      );
    });
  }

  /**
   * Move a artwork to display or storage.
   * @function moveArtwork
   * @param {string} artworkTitle - The supposed title of the artwork.
   * @param {string} area - The area to move the artwork to. Either 'display' or 'storage'.
   * @returns {boolean} - True if the artwork was moved successfully, false otherwise.
   * @description Move a artwork to display or storage.
   * If the artwork is moved to display, the new weight of the display area should not exceed the display weight capacity.
   */
  moveArtwork(artworkTitle, area) {
    // TODO: Implement this method
    return false;
  }

  /**
   * @function minimumNumberOfTrips
   * @description Function to find the minimum number of trips required to move all the artworks to the gallery.
   * @returns {number[]} - The weight of carried artworks in each trip.
   * @description The total weight of the carried artworks in each trip should not exceed the maximum carry weight. The goal is to move all the artworks to the gallery in minimum number of trips.
   */
  minimumNumberOfTrips() {
    return [];
  }
}
