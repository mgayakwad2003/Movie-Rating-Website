const movies = [

{
title: "Inception",
genre: "Sci-Fi",
year: "2010",
poster: "images-inception.jpg"
},

{
title: "Avengers Endgame",
genre: "Action",
year: "2019",
poster: "images-avengers.jpg"
},

{
title: "Interstellar",
genre: "Sci-Fi",
year: "2014",
poster: "images-interstellar.jpg"
},

{
    title: "Titanic",
    genre: "Romance",
    year: "1997",
    poster: "images-titanic.jpg"
}

];

const container = document.getElementById("movieContainer");

movies.forEach(movie => {

const card = document.createElement("div");

card.classList.add("movie-card");

card.innerHTML = `
<img src="${movie.poster}" alt="${movie.title}">
<h3>${movie.title}</h3>
<p>Genre: ${movie.genre}</p>
<p>Year: ${movie.year}</p>
<div class="rating">
<span class="star">&#9733;</span>
<span class="star">&#9733;</span>
<span class="star">&#9733;</span>
<span class="star">&#9733;</span>
<span class="star">&#9733;</span>
</div>
`;

container.appendChild(card);

});

document.addEventListener("click", function(e){

if(e.target.classList.contains("star")){

let stars = e.target.parentElement.querySelectorAll(".star");

stars.forEach(star => star.classList.remove("active"));

let clickedIndex = [...stars].indexOf(e.target);

for(let i=0;i<=clickedIndex;i++){
stars[i].classList.add("active");
}

}

});