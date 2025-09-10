# Represents a painting
class Artwork:
    def __init__(self, title, artist, year, weight):
        """
        Creates a new artwork

        Arguments:
        title - The title of the painting
        artist - The artist who created the painting
        year - The year the painting was created
        weight - The weight of the painting in grams

        """
        self.title = title
        self.artist = artist
        self.year = year
        self.weight = weight

    def to_dict(self) -> dict:
        """
        Helper function that converts artwork details to a dictionary
        """
        return {
            "title": self.title,
            "artist": self.artist,
            "year": self.year,
            "weight": self.weight,
        }


# Represents a gallery
class Gallery:
    """
    Creates a new gallery

    Arguments:
    name - The name of the gallery
    artworks - A list of all the artworks in the gallery (List[Artwork])
    displayWallWeightCapacity - Maximum weight that can be displayed on the wall in grams
    """

    def __init__(self, name, displayWallWeightCapacity):
        self.name = name
        self.artworks = []
        self.displayWallWeightCapacity = displayWallWeightCapacity
        self.maxCarryWeight = (
            10000  # Maximum weight that can be carried by a person in grams (10 kg)
        )

    def addArtwork(self, title, artist, year, weight):
        """
        Add a new artwork to the gallery

        Arguments:
        title - The title of the painting
        artist - The artist who created the painting
        year - The year the painting was created
        weight - The weight of the painting in grams
        """
        if any(obj.title == title for obj in self.artworks):
            print(f"Artwork with title {title} already exists in the gallery.")
            raise Exception(
                f"Artwork with title {title} already exists in the gallery."
            )

        artwork = Artwork(title, artist, year, weight)
        self.artworks.append(artwork)

    def addListOfArtworks(self, artworks):
        """
        Add a list of artworks to the gallery

        Arguements:
        artworks - An array of artworks to be added to gallery
        """
        for artwork in artworks:
            self.addArtwork(artwork.title, artwork.artist, artwork.year, artwork.weight)

    def moveArtwork(self, artworkTitle, area):
        # TODO
        return False
