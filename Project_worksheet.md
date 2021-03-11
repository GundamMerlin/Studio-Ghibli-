# Project Overview

## Project Name

Studio Ghibli Movie Project

## Project Description

Allow the user to look up data about Studio Ghibli movies and to see the movie poster and relevant data
## API and Data Sample

async function infoRequest() {
  try {
    const url = `https://ghibliapi.herokuapp.com/films`;
    const response = await axios.get(url);
    response.data.forEach(movie => { console.log(movie.title) });
    displayMovieList(movie.title);
  } catch (err) {
    console.log(error.message);
  }
}
infoRequest();


## Wireframes

https://imgur.com/a/UJmIgYJ

#### MVP 
- Find and use external api 
- Render data on page 
	-Year
	-Director
	-Synopsis
- Display movie poster
- Add CSS Styling
- Add Responsive Design functionality

#### PostMVP  

- Add additional links/pages to movie relevant sites
- Add ability to click on poster to link to 

## Priority Matrix

https://imgur.com/a/d9TegaR

## Timeframes

https://imgur.com/a/0B6mEOW

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	const movieClass = document.querySelector(".movieinfo")
function renderData() {
  movieClass.innerHTML = ""
  if (currentlyDisplayedMovies.length >= 5) {
    currentlyDisplayedMovies.pop();
  }
  currentlyDisplayedMovies.forEach(movie => { 
  let movieYear = document.createElement('h2')
  let movieDirector = document.createElement('h3')
  let movieDescription = document.createElement('p')
  movieYear.innerText = `Release Year: ${movie.release_date}`
  movieDirector.innerText =`Director: ${movie.director}`
  movieDescription.innerText = movie.description
  movieClass.appendChild(movieYear)
  movieClass.appendChild(movieDirector)
  movieClass.appendChild(movieDescription)
  let imageDiv = document.createElement('img')
  imageDiv.setAttribute('class', 'poster')
  movieDescription.setAttribute('class','description')
    let displayImage;
  for (let key in images) {
    if (movie.id === key) {
      console.log(images[key])
      displayImage = images[key].image
    }
  }
    imageDiv.src = displayImage;
    movieClass.appendChild(imageDiv);
  })   
}
}
```This is the code that does pretty much the entire basis of the website's functionality, but also after completing this the lines also showed me that I could possible clean this up and break them up into smaller functions

## Change Log
 Changed the search form to a dropdown box as the object that was returned from the the API call was an array with only 21 elements.
 Removed border around the movieinfo div container to streamline the page and keep it inline with the minimalist theme
 
 
