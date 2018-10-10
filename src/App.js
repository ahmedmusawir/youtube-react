import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// YouTube API Key
const API_KEY = 'AIzaSyAIMCxrRnRcYiNIhXK0IH_AC7OvS5eX1nc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ReactTube!',
      videos: [],
      selectedVideo: null,
    };
    // Default Search String
    this.videoSearch('Best Sports Cars');
  }
  // Main Video Search Function
  videoSearch(termText) {
    YTSearch({ key: API_KEY, term: termText }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  // searchTermHandler = (term) => {
  //   this.videoSearch(term);
  // };

  // Handles Clicks on Video List on the right sidebar
  videoClickHandler = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    // Makes the Search function delay by half a second
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 500);

    const { name, videos, selectedVideo } = this.state;
    return (
      <div className="App">
        <Header branding={name} />
        <section className="container">
          <SearchBar onSearchTermChange={videoSearch} />
          <div className="row">
            <VideoDetail video={selectedVideo} />
            <VideoList onVideoSelect={this.videoClickHandler} videos={videos} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
