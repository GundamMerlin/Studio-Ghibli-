let currentlyDisplayedMovies = [];
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
function renderData() {
  movieClass.innerHTML = ""
  if (currentlyDisplayedMovies.length >= 5) {
    currentlyDisplayedMovies.pop();
  }
  currentlyDisplayedMovies.forEach(movie => { 
  let movieYear = document.createElement('h2')
  let movieDirector = document.createElement('h3')
  let movieDescription = document.createElement('p')
  movieYear.innerText = movie.release_date
  movieDirector.innerText = movie.director
  movieDescription.innerText = movie.description
  movieClass.appendChild(movieYear)
  movieClass.appendChild(movieDirector)
    movieClass.appendChild(movieDescription)
    let imageDiv = document.createElement('img')
    let displayImage;
  for (let key in images) {
    if (movie.id === key) {
      displayImage = images[key].image
    }
  }
    imageDiv.src = displayImage;
    movieClass.appendChild(imageDiv);
  })   
}
async function chooseMovie(event) {
  try {
    const url = `https://ghibliapi.herokuapp.com/films/${event.target.value}`
    const response = await axios.get(url);
      currentlyDisplayedMovies = [response.data,...currentlyDisplayedMovies]
      renderData();
    console.log(response);
  } catch (err) {
    console.log(err.message)
    // console.log('This is not Working');
    // console.log(err)
  }
}
movieList.addEventListener('change', chooseMovie)






