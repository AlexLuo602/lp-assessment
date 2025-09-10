package com.example.backend_java_api;

import com.example.backend_java_api.data.ArtworkList;
import com.example.backend_java_api.models.Artwork;
import com.example.backend_java_api.models.Gallery;
import java.util.List;
import java.util.Optional;
//import java.util.stream.Collectors;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class BackendJavaApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendJavaApiApplication.class, args);
        System.out.println("BackendJavaApiApplication is now running!");
    }

    @RestController
    public class GalleryController {

        // Initialize gallery and artworks (equivalent to the Node.js version)
        private final Gallery gallery = new Gallery(
            "Vincent's Art Gallery",
            10000,
            60000
        );

        public GalleryController() {
            // Add artworks to gallery on initialization
            gallery.addListOfArtworks(ArtworkList.getArtworks());
        }

        // Home route
        @GetMapping("/")
        public String welcome() {
            return "Welcome to " + gallery.getName() + "!";
        }
    }
}
