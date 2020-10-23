var searchYouTube = ({key, query, max = 5}, callback) => {
  console.log('in searchYoutube');
  if (false) {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: 'true'
    })
      .done(({items}) => {
        console.log('SUCCESSFUL GET');
        if (callback) {
          callback(items);
        }
      })
      .fail(({responseJSON}) => {
        responseJSON.error.errors.forEach((err) =>
          console.error(err)
        );
      });
  }
};

export default searchYouTube;
