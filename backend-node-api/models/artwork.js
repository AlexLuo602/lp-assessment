/**
 * Represents a painting.
 * @class
 */
export class Artwork {
  /**
   * Creates a new artwork.
   *
   * @param {string} title - The title of the painting.
   * @param {string} artist - The artist who created the painting.
   * @param {number} year - The year the painting was created.
   * @param {number} weight - The weight of the painting in *grams.
   */
  constructor(title, artist, year, weight) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.weight = weight;
  }
