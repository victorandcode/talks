global.bestMovie = "The godfather";

const reviewer = {
  bestMovie: "Big Fish",
  sayBestMovie: function() {
    console.log(this.bestMovie);
  }
};

// Here we're printing the wrong bestMovie. We want to print the one
// that the reviewer has as a property fix this.
const sayFn = reviewer.sayBestMovie;
sayFn();
