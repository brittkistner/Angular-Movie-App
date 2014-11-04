movies.controller("myCtrl", function($scope, $http) {
  $scope.movies = [];
  $scope.moreInfo = [];
  $scope.titles = [];

  $scope.lookup = function(){
    $http({
      method: 'jsonp',
      url:'http://api.rottentomatoes.com/api/public/v1.0/movies/',
      params: {
        apikey: '7frqtb545bh8m6mzeghcf88u',
        q: $scope.movieTitle,
        page_limit: '10',
        callback: 'JSON_CALLBACK'
      }
    }).then(function(promise) {
      for (var i=0; i <promise.data.movies.length; i++) {
        $scope.movies.push({
          'title': promise.data.movies[i].title,
           'rating': promise.data.movies[i].ratings.critics_rating,
          'poster': promise.data.movies[i].posters.thumbnail,
          'runtime': promise.data.movies[i].runtime});
        // $scope.titles.push(promise.data.movies[i].title);
        console.log(promise.data.movies);
      }
    });
  }

  $scope.moreInfo = function(){
    console.log('clicked');
    if (this.description){
      this.description = false;
    }
    else{
      this.description = true;
    }
  }
})

