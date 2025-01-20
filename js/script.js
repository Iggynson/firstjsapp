let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько его оцените?');
    
        if (a != null && b != null && a != ''&& b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('isDone!');
        } else {
            console.log('isError!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы киноман!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

