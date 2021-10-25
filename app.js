let movies = [{
    watched:false,
    name: 'Training Day',
    year:2001,
    country:'USA',
    actors:[
        'Denzel Washingotn',
        'Ethan Hawke',
        'Eva Mendes'
    ]
},
{
    watched:false,
    name: 'Triple Frontier',
    year:2019,
    country:'USA',
    actors:[
        'Charlie Hunnam',
        'Ben Affleck',
        'Oscar Isaac'
    ]
},
{
    watched:false,
    name: 'Sicario',
    year:2015,
    country:'USA',
    actors:[
        'Josh Brolin',
        'Benicio del Toro',
        'Emili Blant'
    ]
}];

let moviesTable = document.getElementById('movies_table');
let newMovieButton = document.getElementById('add_button');

function addMovies(){
    let moviesShow = '';
    movies.forEach((movie, index) =>{
        moviesShow += `<tr id="movie_${index}" onclick="checked()">
            <td><input type="checkbox" class="check"></td>
            <td id="watched_${index}">${movie.watched}</td>
            <td>${movie.name}</td>
            <td>${movie.year}</td>
            <td>${movie.country}</td>
            <td>${movie.actors}</td>
            </tr>`
    })
    moviesTable.innerHTML = moviesShow
}
addMovies(movies)


newMovieButton.addEventListener('click',(e)=>{
    e.preventDefault();
    addNewMovie();
    
});



function getInputs(){
let newWatched = document.getElementById('new_watched').value;
let newName = document.getElementById('new_name').value;
let newYear = Number(document.getElementById('new_year').value);
let newCountry = document.getElementById('new_country').value;
let newActors = document.getElementById('new_actors').value.split(',');




    if(!validate(newWatched, newName, newYear, newCountry, newActors)) return false;


    return{
        watched:!Boolean(newWatched),
        name:newName,
        year:newYear,
        country:newCountry,
        actors:newActors
    }
}     

function addNewMovie(){
    let inputs = getInputs();
    if(!inputs) return
    movies.push(inputs)
    addMovies(movies)
    clearInputs();
}
function clearInputs(){
 newWatched = document.getElementById('new_watched').value = '';
 newName = document.getElementById('new_name').value = '';
 newYear = document.getElementById('new_year').value = '';
 newCountry = document.getElementById('new_country').value = '';
 newActors = document.getElementById('new_actors').value = '';
}

function validate(Watched, Name, Year, Country, Actors){

    document.getElementById('new_watched').classList.remove('is-invalid');
    document.getElementById('new_name').classList.remove('is-invalid');
    document.getElementById('new_year').classList.remove('is-invalid');
    document.getElementById('new_country').classList.remove('is-invalid');
    document.getElementById('new_actors').classList.remove('is-invalid');





    let validation = true;
    if(Watched == ''){
        document.getElementById('new_watched').classList.add('is-invalid');
        validation = false;
    }if(Name == ''){
        document.getElementById('new_name').classList.add('is-invalid');
        validation = false;
    }if(Year == '' || Year<1930 || Year>2021){
        document.getElementById('new_year').classList.add('is-invalid');
        validation = false;
    }if(Country == ''){
        document.getElementById('new_country').classList.add('is-invalid');
        validation = false;
    }if(Actors == ''){
        document.getElementById('new_actors').classList.add('is-invalid');
        validation = false;
    }
    return validation;
}


function checked(){
    let check = document.getElementsByClassName('check');

    for(let i=0; i<check.length; i++){
        if(check[i].checked){
            document.getElementById(`movie_${i}`).style.backgroundColor = "#D1E7DD";
            movies[i].watched = true;
            document.getElementById(`watched_${i}`).innerHTML = movies[i].watched;

        }else{
            document.getElementById(`movie_${i}`).style.backgroundColor = "#F8D7DA";
            movies[i].watched = false;
            document.getElementById(`watched_${i}`).innerHTML = movies[i].watched;

        }
    };

  
}
