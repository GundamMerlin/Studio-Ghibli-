//target
const movieList = document.querySelector("select");
function renderOptions(movies) {
  movies.forEach(movie => {
    let moviesDiv = document.createElement('option');
    moviesDiv.innerText = movie.title
    moviesDiv.value = movie.id
    movieList.appendChild(moviesDiv)
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
const movieClass = document.querySelector(".movieinfo")
function renderData(movieData) {
  console.log(movieData);
  let movieYear = document.createElement('h2')
  let movieDirector = document.createElement('h3')
  let movieDescription = document.createElement('p')
  movieYear.innerText = movieData.release_date
  movieDirector.innerText = movieData.director
  movieDescription.innerText = movieData.description
  movieClass.appendChild(movieYear)
  movieClass.appendChild(movieDirector)
  movieClass.appendChild(movieDescription)
// //where to add the remove method?  
}
async function chooseMovie(event) {
  try {
    const url = `https://ghibliapi.herokuapp.com/films/${event.target.value}`
    const response = await axios.get(url);
    renderData(response.data);
    // console.log(response);
  } catch (err) {
    console.log('This is not Working');
    // console.log(err)
  }
}
movieList.addEventListener('change', chooseMovie)


  




