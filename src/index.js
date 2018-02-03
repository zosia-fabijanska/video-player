import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCWruVTa5LMxvrzilJJXOw6hGGstbAX54s';

const App = () => {
return (
    <div>
        <SearchBar />
    </div>);
}
// Generate HTML from the component and render it in the the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));