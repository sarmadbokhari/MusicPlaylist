var template = $('#templates .video-list-item').html();
var autoplay = $('#templates .autoplay').html();
var genres = $('#templates .genres').html();

var videos = [
  { title: 'ES Posthumus', youtubeID: '8AEU5pBxY6E', genre: 'classical' },
  { title: 'Sparta', youtubeID: 'sIeJSSjTG3k', genre: 'humor' },
  { title: '99 Names', youtubeID: 'SQmBv7sP8x0', genre: 'nasheed' },
  { title: 'Jumah', youtubeID: 'm0MqT-S9fiI', genre: 'nasheed' },
  { title: 'Supplication', youtubeID: 'NzNY9BoWmh0', genre: 'nasheed' }
];

var genres = [];
var stats = {};

for (var i = 0; i < videos.length; i++){
  var genre = videos[i].genre;
  if (stats[genre] === undefined){
    stats[genre]= 0;
  }
  stats[genre] += 1;
}

genres.push(stats);


console.log('Genre object:', stats);


// DISPLAYING VIDEOS & GENRE STATS

$(document).ready(function(){
  var renderVideoDisplay = function(){
    $('.video-display').append(Robin.render(autoplay, videos[0]));
  };
  renderVideoDisplay();

  var renderGenreStats = function(){
  // $("#genre-list").empty();
    for (var i = 0; i < genres.length; i++){
      $('#genre-list').append(Robin.render(template, stats));
    }
    };
  renderGenreStats();

});

// SUBMITTING NEW VIDEOS

$(".submit").on('click', function(e){
  e.preventDefault();
  var newVideo = {
    title: $('.title').val(),
    link: $('.link').val()
  };

  videos.push(newVideo);

  renderVideoList();
});

var renderVideoList = function () {
  $("#video-list").empty();
  for(var i = 0; i < videos.length; i++){
    $("#video-list").append(Robin.render(template, videos[i]));
  }
};

$('#video-list').empty();
renderVideoList();
