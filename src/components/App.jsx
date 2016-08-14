class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      allVideos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentWillMount() {
    this.props.live({
      query: '',
      key: 'AIzaSyDjJxLOZ6UBsNEhboMgixiBdr0zcZzxxWY',
      max: 10
    }, this.stateSetting.bind(this));
  }

  stateSetting (result) {
    this.setState({
      allVideos: result,
      currentVideo: result[0]
    });
  }

  onClickVideoTitle(video) {
    this.setState({
      currentVideo: video
    });
  }


  handleKeyDown(e, query) {
    console.log('e: ', e);
    console.log('query: ', query);
    var ENTER = 13;
    if ( e.keyCode === ENTER ) {
      this.searchYouTube(query);
    }

  }


  searchYouTube(query) {
    this.props.live({
      query: query,
      key: 'AIzaSyDjJxLOZ6UBsNEhboMgixiBdr0zcZzxxWY',
      max: 10
    }, this.stateSetting.bind(this));
  }

  render() {
    return (
      <div>
      <Nav search={this.searchYouTube.bind(this)} keys={this.handleKeyDown.bind(this)} />
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