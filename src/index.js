import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCWruVTa5LMxvrzilJJXOw6hGGstbAX54s';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos:[],
            selectedVideo:null
        };
        
        YTSearch({key: API_KEY, term: 'design'}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        })
    }
    render () {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>);
    };
}
// Generate HTML from the component and render it in the the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));