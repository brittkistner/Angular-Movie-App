movies.controller("myCtrl", function($scope, $http) {
  // $scope.movies = [];
  // $scope.moreInfo = [];
  // $scope.titles = [];

  // $scope.lookup = function(){
  //   $http({
  //     method: 'jsonp',
  //     url:'http://api.rottentomatoes.com/api/public/v1.0/movies/',
  //     params: {
  //       apikey: '7frqtb545bh8m6mzeghcf88u',
  //       q: $scope.movieTitle,
  //       page_limit: '10',
  //       callback: 'JSON_CALLBACK'
  //     }
  //   }).then(function(promise) {
  //     for (var i=0; i <promise.data.movies.length; i++) {
  //       $scope.movies.push({
  //         'title': promise.data.movies[i].title,
  //          'rating': promise.data.movies[i].ratings.critics_rating,
  //         'poster': promise.data.movies[i].posters.thumbnail,
  //         'runtime': promise.data.movies[i].runtime});
  //       // $scope.titles.push(promise.data.movies[i].title);
  //       console.log(promise.data.movies);
  //     }
  //   });
  // }

  // $scope.moreInfo = function(){
  //   console.log('clicked');
  //   if (this.description){
  //     this.description = false;
  //   }
  //   else{
  //     this.description = true;
  //   }
  // }

  $scope.comingSoon = [];
  $scope.inTheaters = [];
  $scope.wishList = [];

  $scope.commingSoon = function(){
    // $scope.comingSoon = [];
    // $scope.inTheaters = [];
    console.log('clicked');
    $http({
      method: 'jsonp',
      url:'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming',
      params: {
        apikey: '7frqtb545bh8m6mzeghcf88u',
        // q: 'upcoming',
        page_limit: '15',
        callback: 'JSON_CALLBACK'
      }
    }).then(function(promise) {
      for (var i=0; i <promise.data.movies.length; i++) {
        $scope.comingSoon.push({
          'title': promise.data.movies[i].title,
           'rating': promise.data.movies[i].ratings.critics_rating,
          'poster': promise.data.movies[i].posters.thumbnail,
          'runtime': promise.data.movies[i].runtime,
          'release_year': promise.data.movies[i].year,
          'cast': promise.data.movies[i].abridged_cast
        });
        // $scope.titles.push(promise.data.movies[i].title);
        console.log(promise.data.movies);
      }
    });
  }

  $scope.theatersNow = function(){
    // $scope.inTheaters = [];
    // $scope.comingSoon = [];
    if ($scope.commingSoon){
      $scope.commingSoon = false;
    }
    console.log('clicked');
    $http({
      method: 'jsonp',
      url:'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters',
      params: {
        apikey: '7frqtb545bh8m6mzeghcf88u',
        // q: 'in_theaters',
        page_limit: '15',
        callback: 'JSON_CALLBACK'
      }
    }).then(function(promise) {
      for (var i=0; i <promise.data.movies.length; i++) {
        $scope.inTheaters.push({
          'title': promise.data.movies[i].title,
           'rating': promise.data.movies[i].ratings.critics_rating,
          'poster': promise.data.movies[i].posters.thumbnail,
          'runtime': promise.data.movies[i].runtime});
        // $scope.titles.push(promise.data.movies[i].title);
        // console.log(promise.data.movies);
      }
    });
  }

  $scope.moreInfo = function(){
    if (this.description){
      this.description = false;
    }
    else{
      this.description = true;
    }
  }

  $scope.addMovie = function(){
    console.log('click');
    console.log(this.attr('id'));
    // $scope.wishList.push(this.attr('id'));
  }
})

