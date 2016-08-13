var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max
    },
    success: function(data) {
      callback(data);
    }
  });
   
};

window.searchYouTube = searchYouTube;