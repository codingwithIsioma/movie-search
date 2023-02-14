
url = 'https://api.themoviedb.org/3/search/movie?api_key=5b99fb2554f175888f0ce98ea95d8be1&language=en-US&query='

// Selecting the form and input fields
const inputField = document.querySelector("#inputfield");
const searchBtn = document.querySelector("#search");
const responseField = document.getElementById("valuefield");

const searchMovie = ()=> {
    const movieTitle = inputField.value;
    const endpoint = `${url}${movieTitle}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        // if (!data.length) {
        //     responseField.innerHTML = `<p>Try again!<br> No suggestions found!</p>`
        //     return;
        // }
        let html = '';
        data.results.forEach(result => {
            const title = result.title.slice(0, 35);
            const releaseDate = result.release_date;
            const overview = result.overview.slice(0, 150);
            const posterPath = result.poster_path;
            
            const poster = `https://image.tmdb.org/t/p/w185/${posterPath}`;
            
            html += `
            <ul class="main-list">
            <li class="movie-list">
                <img src="${poster}" alt="${title} poster" id="poster-img">
                <div class="movieContainer">
                <h2 id="movie-title">${title}..</h2>
                <p id="movie-desc">${overview}..</p>
                <p id="release-year">Release Date: ${releaseDate}</p>
                </div>
            </li>
            </ul>
            `;
        });
        
        responseField.innerHTML = html;
    })
    .catch(error => console.error(error));
};

//Clears the previous search
const displayNewSearch = (e)=> {
    e.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    searchMovie();
}

// Calls the search functionality
searchBtn.addEventListener('click', displayNewSearch);












// const findMovie = ()=> {
//     const movieTitle = inputField.value;
//     const endpoint = `${url}${movieTitle}`;

//     fetch(endpoint, {cache: 'no-cache'})
//     .then((response)=> {
//         if (response.ok){
//             return response.json()
//         }
//     })
//     .then((jsonResponse)=> {
//         renderToResponse(jsonResponse)
//     })
// }