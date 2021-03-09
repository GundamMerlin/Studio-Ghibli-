//target
const movieList = document.querySelector("select");
function renderOptions(movies) {
  movies.forEach(movie => {
    let movieDiv = document.createElement('option'); //create option element
    movieDiv.innerText = movie.title //give data to list element
    movieDiv.value = movie.id
    movieList.appendChild(movieDiv)//render information in li to page
    // console.log(movie.title)
  });
}
async function handleRequest() {
  try {
    const url = `https://ghibliapi.herokuapp.com/films`;
    const response = await axios.get(url);
    renderOptions(response.data)
    } catch (err) {
    console.log(error.message);
  }
}
handleRequest();

// function renderMovie(movie) {
  
// }
// https://ghibliapi.herokuapp.com/films/{id} 
async function chooseMovie(event) {
  try {
    const url = `https://ghibliapi.herokuapp.com/films/${event.target.value}`
    const response = await axios.get(url);
    renderMovie(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(error.message);
    // console.dir(event.target.value);
  }
}

//add event listener
movieList.addEventListener('change', chooseMovie)
//only grabs what is in the search box
// attach to render request function


  




