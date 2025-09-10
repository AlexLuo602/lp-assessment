# Local Art Gallery Catalog

![Art Gallery Image](https://images.unsplash.com/photo-1565799515768-2dcfd834625c?q=80&w=3619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)


This is a toy project, a simple catalog for an art gallery exhibition. Most of the code is already written, however there are places where we'd like to extend the functionality of the catalog. This is an opportunity to show your skills and walk us through your thought process.

## Codebase

- this is a simple React.js (Next.js) application. A frontend that shows a list of artworks featured at the exhibition.
- There is also a form that allows uers to bid on artworks in the catalog

## Process

- Your interviewer will share the codebase with you. You will be asked one or two questions.
- You will have 15 minutes total so don't worry if you don't finish everything. We are more interested in your thought process and how you approach the problem.
- You can ask questions at any time.
- You can use any resources you want, including the internet, documentation and even AI/LLMs but be prepared to explain your reasoning.

## Questions

### Question 1: Adding searchability to the catalog

Take a look at the `artworkCatalog.tsx` file in the `src/components` folder. The `ArtworkCatalog` component is used to display a list of featured artworks at the exhibition. The artworks displayed are fetched from an external API. We want to make our catalog searchable, so that we can type in the artwork's name or artist, and see matching results. Specifically, if we type in the name of an artwork, we should see only the artworks matching that name, and likewise for an artist. 

Additionally, if there are no results matching the search query, the component should display "No artworks found".
Update the code below to handle the above requirements. 

#### Discussion follow-up: Server Side Rendering

Explain what you understand of SSR (Server-Side Rendering) and how we may apply it to the artwork catalog component. 


### Question 2: Handling artwork bid form

The gallery wants to allow users to make bids on artwork. Therefore, the catalog needs to also have a form to submit a bid with the artwork name, artist and bid amount. We've included the layout for the form here, but we need to make this form functional. That is, when the user places a bid with the bid amount, artwork name and artist fields, they should receive a response from the 'submit' endpoint saying 'bid placed sucessfully. If there is an error with the bid request, the user should be shown a message saying 'error placing bid, please try again shortly'. 

Assumptions:

- You can add any artwork name in the 'name' field 
- You can add any artist in the 'artist' field
- You can add any bid amount in the bid amount field 

Update the code to make it able to handle the above requirements. You can add, modify or remove any code you want.

#### Discussion follow-up: Frontend validation 

Suppose we wanted to check whether the user has entered all the fields and the values are valid. Discuss how we could do this on the frontend. 

### Question 3a: Improving UI - Displaying maximum bid 

Suppose we have a GET endpoint '/maxbid' that returns the maximum bid placed so far. Display the maximum bid placed so far and whether the bid you want to place is larger than the maximum bid.

### Question 3b: Improving UI - Turn artwork text fields into dropdown
We want to reduce the possibility of a user entering an artwork that doesn't exist in the catalog. Remove the existing artist and artwork name fields and replace it with a dropdown, containing the artworks that are in the catalog.

#### Discussion follow-up: 
The gallery wants to offer a WebSocket connection for the bidding. Briefly explain what the pros and cons of this approach would be in the context of this application. 
