const movie = 'crime';
const url = `https://api.tvmaze.com/search/shows?q=${movie}`;
const displayMovies = document.getElementById('display-Movies');

export async function getMovies() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    return false;
  }
}

export const renderMovieDetail = async (id) => {
  const movies = await getMovies();
  const moviePopup = document.createElement('div');
  moviePopup.innerHTML = '';

  movies.forEach((movie) => {
    if (id === movie.show.id) {
      const comedyMovie = document.createElement('div');
      const movieTitle = document.createElement('label');
      movieTitle.innerHTML = `${movie.show.name}`;
      comedyMovie.classList.add('movie-div');
      const comedyImage = document.createElement('img');
      comedyImage.src = movie.show.image.medium;
      const movieStatus = document.createElement('label');
      movieStatus.innerHTML = `${movie.show.status}`;
      const moviePremiered = document.createElement('label');
      moviePremiered.innerHTML = `${movie.show.premiered}`;
      comedyMovie.append(comedyImage);
      comedyMovie.append(movieTitle);
      comedyMovie.append(movieStatus);
      comedyMovie.append(moviePremiered);
      moviePopup.append(comedyMovie);
      document.body.append(moviePopup);
    }
  });
};

export const renderMovies = async () => {
  const movies = await getMovies();
  displayMovies.innerHTML = '';
  movies.forEach((movie) => {
    const comedyMovie = document.createElement('div');
    const movieTitle = document.createElement('label');
    movieTitle.innerHTML = `${movie.show.name}`;
    comedyMovie.classList.add('movie-div');
    const comedyImage = document.createElement('img');
    comedyImage.src = movie.show.image.medium;
    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.innerHTML = 'Comments';
    commentButton.id = movie.show.id;
    comedyMovie.append(movieTitle);
    comedyMovie.append(comedyImage);
    comedyMovie.append(commentButton);
    displayMovies.append(comedyMovie);

    commentButton.onclick = (e) => {
      e.preventDefault();
      renderMovieDetail(movie.show.id);
    };
  });
};
