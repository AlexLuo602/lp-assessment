# Local Art Gallery Online Service

![image](https://images.unsplash.com/photo-1565799515768-2dcfd834625c?q=80&w=3619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

This is a toy project. This is a simple booking service for an art gallery exhibition. Most of the code is already written, however there are places where things could be done better or logic that is missing. This is an opportunity to show your skills and walk us through your thought process. We only care how you tackle things even if you don't know how to.

## Codebase

- This is a simple backend codebase disguised as a gallery's backend.
- To keep things simple, the application uses an in-memory database.
- the code is also written in JS to make sure everyone can understand it; however we have added JSDoc comments to make it easier to understand the codebase.

## Process

- Your interviewer will share the codebase with you. You will be asked one or two questions.
- You will have 10-15 minutes total so don't worry if you don't finish everything. We are more interested in your thought process and how you approach the problem.
- You can ask questions at any time and encourage you to think aloud and share your thoughts.
- You can use any resources you want, including the internet, documentation and even AI/LLMs but be prepared to explain your reasoning.

## Questions


### Question 1: Artwork Data Structure


Take a look at the `Artwork` file in the `models` folder. The `Artwork` class is used to represent a piece of art in the system. There is also a `Gallery` class inside (models folder) that is used to represent the gallery. The gallery keeps a list of all paintings it has in its collection.

The gallery wants to expand its collection to include other types of art, such as **furnitures** and **photographs**; however, the current data structure is not flexible enough to handle this. photographs have an extra attribute to keep the location of where it was taken. Furnitures  have a direction in degrees from north to know how to position them.

Walk us through the current data structure and then update the code to make it able to handle different types of art.

*Follow up Discussions:*


1. If the gallery keeps adding more types to its inventory, what is your approach in writing the code to make it scale better. For example, any pattern or strategy you take to prevent making drastic changes to the code?
2. Artworks could end up having the same title; if we want to find an artwork or identify one what are some ways we can do that.

### Question 2: Storage and Display


The gallery wants to monitor the weight of the pieces on display; this heritage building has a limit on the pieces they put on display. Displayed pieces are hung on the wall and some are displayed on the floor. There is only so much weight that the walls and floors can hold. The gallery marks pieces of art as being displayed or in storage at any given time.

What the gallery wants to be able to do is to:


- Mark pieces of art as being displayed or in storage at any given time
- Calculate how much weight is taken up by all the pieces of art
- Prevent pieces of art from being displayed if it exceeds the weight limit

Go over the `gallery` class first you will mainly have to update `moveArtwork` . Update the code to make it able to handle the above requirements. You can add, modify or remove any code you want. You may need to add more properties or helper functions to the `Artwork` class(es).

Assumptions you can make:


- All art pieces should have a weight. They are either displayed (wall or floor) or in storage.
- Do not worry about location, dimensions or any orientation of the art pieces; only the weight.
- The gallery has different limits for wall and floor. However, it has no storage limitation.
- Artwork titles are unique.

Tip 1: You might need to keep track of where each artwork if (storage or display)

### Question 3: API for artworks on display


So the gallery will at one point want to make a website to show the pieces they have and also only get the ones on display if wanted. Moreover, they want to be able to view a retrieve a single artwork based on its name.

Your task to expose a REST API to deliver the above needs. Based on your work from Q2 you can use the Gallery functions and implement this API.

Tip 1: You will need to have two endpoints. One for getting artworks and the other for getting the single artwork

Tip 2: For getting artworks there should be away for the endpoint to know if the request wants all artworks or only the ones on display.

Tip 3: Remember the titles are used as id. Unfortunately that will mean the titles can have spaces in them.

Follow up Discussions:


1. If the gallery had millions of artwork pieces what are some ways you can ensure the APIs are fast and performant?
2. What if we wanted to get the pieces between a custom year range. For example 1850-1950


----

**Bonus Question**: Moving the pieces from storage to display and vice versa.

The gallery staff responsible more moving the items is just one person. They can carry at most 10kg from either place to the other. At the end of the day the have to move everything to storage for security.

 They want to do the minimum number of trips from display to storage doing so.

Implement the function `minimumNumberOfTrips` in the `Gallery` class. The function should return an array of numbers (not necessarily a whole number) of the weights in each trip.

For example if you have three artworks of weights 7kg, 4kg and 5kg, since they can't be done in one trip, you will need two at least two trips. Hence the function should return an array of size two: [7,9] or [9,7].

**Tip 1**: First let's discuss the brute force solution if compute and time wasn't an issue.

**Tip 2**: Let's discuss more efficient ways to do it and if there is time we can implement.
