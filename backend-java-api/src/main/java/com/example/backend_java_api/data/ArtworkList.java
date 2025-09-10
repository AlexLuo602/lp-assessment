package com.example.backend_java_api.data;

import com.example.backend_java_api.models.Artwork;
import com.example.backend_java_api.models.Painting;
import java.util.ArrayList;
import java.util.List;

public class ArtworkList {

    public static List<Artwork> getArtworks() {
        List<Artwork> artworks = new ArrayList<>();

        artworks.add(
            new Painting("Starry Night", "Vincent van Gogh", 1889, 5000)
        );
        artworks.add(
            new Painting(
                "The Persistence of Memory",
                "Salvador Dalí",
                1931,
                4500
            )
        );
        artworks.add(
            new Painting("Mona Lisa", "Leonardo da Vinci", 1503, 6000)
        );
        artworks.add(new Painting("The Scream", "Edvard Munch", 1893, 5500));
        artworks.add(
            new Painting("The Last Supper", "Leonardo da Vinci", 1498, 7000)
        );
        artworks.add(new Painting("Guernica", "Pablo Picasso", 1937, 8000));
        artworks.add(new Painting("The Night Watch", "Rembrandt", 1642, 9000));
        artworks.add(
            new Painting(
                "Girl with a Pearl Earring",
                "Johannes Vermeer",
                1665,
                4700
            )
        );
        artworks.add(
            new Painting("The Birth of Venus", "Sandro Botticelli", 1486, 7200)
        );
        artworks.add(new Painting("American Gothic", "Grant Wood", 1930, 4900));

        return artworks;
    }

    public static void main(String[] args) {
        List<Artwork> artworks = getArtworks();
        artworks.forEach(artwork ->
            System.out.println(
                artwork.getTitle() + " by " + artwork.getArtist()
            )
        );
    }
}
