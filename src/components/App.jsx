class App extends React.Component {
    
  constructor() {
    super();
    this.state = {
      allVideos: (function () {
        searchYouTube({
          query: 'cat',
          key: 'AIzaSyDjJxLOZ6UBsNEhboMgixiBdr0zcZzxxWY',
          max: 5
        }, function(results) {
          return results.items;
        });
      }),
      currentVideo: (function () {
        searchYouTube({
          query: 'cat',
          key: 'AIzaSyDjJxLOZ6UBsNEhboMgixiBdr0zcZzxxWY',
          max: 5
        }, function(results) {
          return results.items[0];
        });
      })
      
    };
  }

  onClickVideoTitle(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {

    return (
      <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.allVideos} onClick={this.onClickVideoTitle.bind(this)} />
      </div>
    </div>
  );
    
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;