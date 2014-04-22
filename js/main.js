var template_html = $('#templates .video-list-item').html();
var autoplay_html = $('#templates .autoplay').html();
var genre_html = $('#templates .genres').html();

var videos = [
  { title: 'ES Posthumus', youtubeID: '8AEU5pBxY6E', genre: 'classical' },
  { title: 'Sparta', youtubeID: 'sIeJSSjTG3k', genre: 'humor' },
  { title: '99 Names', youtubeID: 'SQmBv7sP8x0', genre: 'nasheed' },
  { title: 'Jumah', youtubeID: 'm0MqT-S9fiI', genre: 'nasheed' },
  { title: 'Supplication', youtubeID: 'NzNY9BoWmh0', genre: 'nasheed' }
];

var stats = {};

var genre = " ";
var renderGenres = function(){
  for (var i = 0; i < videos.length; i++){
    genre = videos[i].genre;
    if (stats[genre] === undefined){
      stats[genre]= 0;
    }
    stats[genre] += 1;
  }
};

renderGenres();


console.log('Genre object:', stats);


// DISPLAYING VIDEOS & GENRE STATS

$(document).ready(function(){
  var renderVideoDisplay = function(){
    $('.video-display').append(Robin.render(autoplay_html, videos[0]));
  };
  renderVideoDisplay();

  var renderGenreStats = function(){
    for (var thegenre in stats){
      console.log(thegenre + ": " + stats[thegenre]);
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
    $("#video-list").append(Robin.render(template_html, videos[i]));
  }
};

$('#video-list').empty();
renderVideoList();
