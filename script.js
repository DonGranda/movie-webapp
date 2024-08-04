// ******************************************************************
// *                                                                *
// *  APILINK removed for safety reseason                           *
// *  SEARCHAPI removed for safety reseason                         *
// *                                                                *
// ******************************************************************

const APILINk='https://api.themoviedb.org/3/discover/movie?&api_key={ INSERT_YOUR_API_HERE }&sort_by=&page=1';
const SEARCHAPI= 'https://api.themoviedb.org/3/search/movie?&api_key={ INSERT_YOURAPI_HERE }&query='
const IMG_PATH='https://image.tmdb.org/t/p/w1280';

    


const main=document.querySelector("#section");
const form=document.querySelector("#form");
const search=document.getElementById("query");


returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_row =document.createElement("div");
            div_row.setAttribute("class", "row");

            const div_card =document.createElement("div");
            div_card.setAttribute("class", "card");

            const div_colum =document.createElement("div");
            div_colum.setAttribute("class", "colums");

            const image=document.createElement("img");
            image.setAttribute("class", "thumbnail");
            image.setAttribute("id", "image")

            const title =document.createElement("h3");
            title.setAttribute("id", "title");

            const center =document.createElement("center");
            


            title.innerHTML= element.title;
            image.src=IMG_PATH+element.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_colum.appendChild(div_card);
            div_row.appendChild(div_colum);

            main.appendChild(div_row);


        });
    });
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    main.innerHTML= "";

    const search_item=search.value;

    if (search_item){

        returnMovies(SEARCHAPI + search_item);
        search.value="";
    }

});
