package com.example.backend_java_api.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// Represents a Gallery
public class Gallery {

    private String name;
    private List<Artwork> artworks;
    private int displayWallWeightCapacity; // Maximum weight that can be displayed on the wall (in grams)
    private int displayFloorWeightCapacity; // Maximum weight that can be displayed on the floor (in grams)
    private final int maxCarryWeight = 10000; // Maximum weight that can be carried by a person (in grams) - 10 kg

    // Constructor
    public Gallery(
        String name,
        int displayWallWeightCapacity,
        int displayFloorWeightCapacity
    ) {
        this.name = name;
        this.artworks = new ArrayList<>();
        this.displayWallWeightCapacity = displayWallWeightCapacity;
        this.displayFloorWeightCapacity = displayFloorWeightCapacity;
    }

    // Add a new artwork to the gallery
    public void addArtwork(String title, String artist, int year, int weight) {
        if (artworks.stream().anyMatch(a -> a.getTitle().equals(title))) {
            throw new IllegalArgumentException(
                "Artwork with title " +
                title +
                " already exists in the gallery."
            );
        }
        Artwork artwork = new Artwork(title, artist, year, weight);
        artworks.add(artwork);
    }

    // Add a list of artworks to the gallery
    public void addListOfArtworks(List<Artwork> newArtworks) {
        for (Artwork artwork : newArtworks) {
            addArtwork(
                artwork.getTitle(),
                artwork.getArtist(),
                artwork.getYear(),
                artwork.getWeight()
            );
        }
    }

    /**
     * Moves an artwork to either display or storage.
     *
     * @param artworkTitle The title of the artwork.
     * @param area The area to move the artwork to. Either 'display' or 'storage'.
     * @return true if the artwork was moved successfully, false otherwise.
     * @throws IllegalArgumentException if the area is not 'display' or 'storage'.
     * @description Moves an artwork to the specified area.
     * If moved to display, ensure that the new weight does not exceed the display area's capacity.
     */
    public boolean moveArtwork(String artworkTitle, String area) {
        // TODO: Implement this method
        return false;
    }

    // Getters and Setters--------------------------------------------
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Artwork> getArtworks() {
        return artworks;
    }

    public void setArtworks(List<Artwork> artworks) {
        this.artworks = artworks;
    }

    public int getDisplayWallWeightCapacity() {
        return displayWallWeightCapacity;
    }

    // IGNORE COMPLETELY: Find the minimum number of trips required to move all artworks
    public List<Integer> minimumNumberOfTrips() {
        return new ArrayList<>(); // Dummy implementation
    }
}
