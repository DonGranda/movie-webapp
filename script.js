const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7cf2ed85d50aee666d78a6ace9eff7ae&page=1';
const IMG_PATH='https://api.themoviedb.org/t/p/w1288';
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=7cf2ed85d50aee666d78a6ace9eff7ae&query";


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
            const div_card =document.createElement("div");
            const div_colum =document.createElement("div");
            const image=document.createElement("img");
            const title =document.createElement("h3");
            const center =document.createElement("center");

            title.innerText='${element.title}'
            image.src=IMG_PATH + element.poster_path
            center.appendChild(image)

        });
    });
    
}