from flask import Flask, jsonify, request, abort
from markupsafe import escape
from models import Gallery
from data.artworks import artworks


app = Flask(__name__)

gallery = Gallery("Vincent's Art Gallery", 100000)
gallery.addListOfArtworks(artworks)

gallery.moveArtwork("Mona Lisa", "display")
gallery.moveArtwork("The Scream", "display")
gallery.moveArtwork("The Night Watch", "display")


# Get ALL artworks
# TODO

# Get artwork by title
# TODO


@app.route("/")
def home():
    return f"Welcome to {gallery.name}"


if __name__ == "__main__":
    app.run(debug=True)
