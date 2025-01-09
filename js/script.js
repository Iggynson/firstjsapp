let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?"), 
    a             = prompt("Один из последних просмотренных фильмов?"), 
    b             = prompt("Какую оценку Вы ему поставите?"),
    c             = prompt("Один из последних просмотренных фильмов?"), 
    d             = prompt("Какую оценку Вы ему поставите?"); 

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;   

console.log(personalMovieDB);  