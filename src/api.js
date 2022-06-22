const movie = 'comedy';
const appId = 'IWf3COm5aU7E5iifRsF3';
const url = `https://api.tvmaze.com/search/shows?q=${movie}`;
const displayMovies = document.getElementById('display-Movies');
const secondUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

export async function getMovies() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    return false;
  }
}
// This is to add function to get likes from the api
export const getLikes = async () => {
  try {
    const res = await fetch(secondUrl);
    const likes = await res.json();
    return likes;
  } catch (error) {
    return false;
  }
};
export async function addLike(id) {
  try {
    const res = await fetch(secondUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  } catch (error) {
    return false;
  }
}
// ends here
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

      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment-div');
      const commentTitle = document.createElement('h2');
      commentTitle.classList.add('comment-item');
      commentTitle.innerHTML = 'Add a comment';
      const addName = document.createElement('input');
      addName.classList.add('comment-item');
      addName.placeholder = 'Your name';
      const addComment = document.createElement('textarea');
      addComment.classList.add('comment-item');
      addComment.placeholder = 'Your insights';
      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-item');
      commentButton.innerHTML = 'Comment';

      comedyMovie.append(comedyImage);
      comedyMovie.append(movieTitle);
      comedyMovie.append(movieStatus);
      comedyMovie.append(moviePremiered);

      commentDiv.append(commentTitle);
      commentDiv.append(addName);
      commentDiv.append(addComment);
      commentDiv.append(commentButton);
      comedyMovie.append(commentDiv);

      moviePopup.append(comedyMovie);

      document.body.append(moviePopup);
    }
  });
};

export const renderMovies = async () => {
  const movies = await getMovies();
  const likes = await getLikes();
  displayMovies.innerHTML = '';
  let counter = 0;
  const moviesSpan = document.getElementById('movies');
  movies.forEach((movie) => {
    counter += 1;
    moviesSpan.innerHTML = `(${counter})`;

    let numLikes = '';
    likes.forEach((like) => {
      if (movie.show.id === like.item_id) {
        numLikes = `${like.likes}`;
      }
    });
    const comedyMovie = document.createElement('div');
    const movieTitle = document.createElement('label');
    movieTitle.innerHTML = `${movie.show.name}`;
    comedyMovie.classList.add('movie-div');
    const likeIcon = document.createElement('i');
    likeIcon.id = movie.show.id;
    likeIcon.classList.add('fas');
    likeIcon.classList.add('fa-solid');
    likeIcon.classList.add('fa-heart');
    const likeLabel = document.createElement('label');
    likeLabel.classList.add('like-label');
    likeLabel.innerHTML = `${numLikes} likes`;
    const comedyImage = document.createElement('img');
    comedyImage.src = movie.show.image.medium;
    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.innerHTML = 'Comments';
    commentButton.id = movie.show.id;
    comedyMovie.append(movieTitle);
    comedyMovie.append(comedyImage);
    comedyMovie.append(likeIcon);
    comedyMovie.append(likeLabel);
    comedyMovie.append(commentButton);
    displayMovies.append(comedyMovie);
    likeIcon.onclick = (e) => {
      e.preventDefault();
      addLike(movie.show.id);
      const newLikes = likes;
      let newNumLikes = '';
      newLikes.forEach((newLike) => {
        if (movie.show.id === newLike.item_id) {
          newNumLikes = `${newLike.likes}`;
        }
      });
      likeLabel.innerHTML = `${newNumLikes}likes`;
      window.location.reload();
    };
    commentButton.onclick = (e) => {
      e.preventDefault();
      renderMovieDetail(movie.show.id);
    };
  });
};
