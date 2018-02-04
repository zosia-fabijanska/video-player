import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCWruVTa5LMxvrzilJJXOw6hGGstbAX54s';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {videos:[]};
        
        YTSearch({key: API_KEY, term: 'design'}, (videos) => {
            this.setState({videos});
        })
    }
    render () {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>);
    };
}
// Generate HTML from the component and render it in the the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));