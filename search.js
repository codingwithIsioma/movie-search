
const renderToResponse = (res) => {
  let movieList = []
  let movieDesc = []
  let movieImages = []
  let movieReleaseYear = []
  res.results.forEach(element => {
    if (!movieList.includes(element.title)) {
      movieList.push(element.title);
      movieDesc.push(element.overview);
      movieImages.push(element.poster_path);
      movieReleaseYear.push(element.release_date);
    }
    if (responseField && responseField.childNodes.length > 0) {
      let lastNodeList = responseField.childNodes[responseField.childNodes.length - 1];
      for(let i = 0; i < movieList.length; i++) {
        let movieHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movieImages[i]}" alt="" id="poster-img">
            <div class="movieContainer">
                <h2 id="movie-title">${movieList[i]}</h2>
                <p id="movie-desc">${movieDesc[i]}</p>
                <p id="release-year">Release Year: ${movieReleaseYear[i]}</p>
            </div>
          `
          lastNodeList.insertBefore("afterend", movieHTML)
      }
    }  
  });
}