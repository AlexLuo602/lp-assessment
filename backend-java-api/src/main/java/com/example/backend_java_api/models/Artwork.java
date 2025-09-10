package com.example.backend_java_api.models;

public class Artwork {

    private String title;
    private String artist;
    private int year;
    private int weight; // weight in grams

    // Constructor for Artwork
    public Artwork(String title, String artist, int year, int weight) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.weight = weight;
    }

    // Getters for the properties
    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public int getYear() {
        return year;
    }

    public int getWeight() {
        return weight;
    }
}
