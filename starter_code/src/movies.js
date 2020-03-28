/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
        let newArr = [...array]
        newArr.sort((a,b) => {
            if(a.year === b.year) {
                if(a.title < b.title) {
                    return -1
                } else if (a.title > b.title) {
                    return 1;
                } else {
                    return 0;
                } 
                
            } else {
                    return a.year - b.year;
                }
        })
        return newArr;
      }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let newArr = array.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
    return newArr.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let newArr = [...array];
    let nameArray = [];
    newArr.forEach(movie => nameArray.push(movie.title));
    nameArray.sort((a,b) => {
        if(a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
        return 0;
    }})
    let twenty = nameArray.splice(0, 20);
    return twenty;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0){return 0};
    let newArray = [...array];
    let ratedMovies = newArray.map(cadaElemento => {return cadaElemento.rate})
    ratedMovies = ratedMovies.filter(cadaElementoArray => cadaElementoArray > 0);
    let sum = ratedMovies.reduce((accumulator, cadaElemento) => accumulator + cadaElemento);
    let avg = sum/array.length;
    return Math.round((avg)*100)/100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let newArray = [...array];
    let arrayFiltered = newArray.filter(movies => movies.genre.includes('Drama'));
    let avg = ratesAverage(arrayFiltered)
    return avg;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertHoursToMinutes(hours){
    var minutesFromHours = hours.split("h");
    return (minutesFromHours[0]*60);
  }
  
  
  function covertMinutesToMinutes(minutes){
    var minutesFromMinutes = minutes.split("min");
    return Number(minutesFromMinutes[0]);
  }
  
  function doTheMath(duration){
    var timePieces = duration.split(" ");
  
    var minutes = timePieces.reduce(function(sum, piece){
      if(piece.includes("h")){
        // add sum + 3*60
        return sum + convertHoursToMinutes(piece)
      }
      return sum + covertMinutesToMinutes(piece)
    }, 0);
    return minutes;
  }
  

  function turnHoursToMinutes(movies){
    var newMoviesArray = movies.map(function(movie){
      var newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = doTheMath(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.rate = movie.rate;
      return newMovie;
    })
    return newMoviesArray;
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function ordenarPorAño (array) {
    let newArr = [...array];
    let nameArray = [];
    newArr.forEach(movie => nameArray.push(movie.year));
    nameArray.sort((a,b) => {
        if(a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
        return 0;
    }})
    return nameArray;
}



function bestYearAvg(array) {
if (array.length === 0) {
    return null;
}
}