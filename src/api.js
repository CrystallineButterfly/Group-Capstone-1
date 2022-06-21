const movie = 'crime';
const url = `https://api.tvmaze.com/search/shows?q=${movie}`;
const displayMovies = document.getElementById('display-Movies');

export async function getMovies() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const renderMovies = async () => {
  const movies = await getMovies();
  displayMovies.innerHTML = '';
  movies.forEach((movie) => {
    const comedyMovie = document.createElement('div');
    const movieTitle = document.createElement('label');
    movieTitle.innerHTML = `${movie.show.name}`;
    comedyMovie.append(movieTitle);
    comedyMovie.classList.add('movie-div');
    const comedyImage = document.createElement('img');
    comedyImage.src = movie.show.image.medium;
    comedyMovie.append(comedyImage);
    displayMovies.append(comedyMovie);
  });
};
