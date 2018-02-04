import React from 'react';
import styled from 'styled-components';

const VideoListItem = ({video, onVideoSelect}) => {

    const videoURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    const Title = styled.div`
        color: #4a4a4a;
        font-size: 1.5em;
        font-family: Helvetica, sans-serif;
    `;
    
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoURL} alt="video thumbnail"/>
                </div>
                <div className="media-body">
                    <Title>{videoTitle}</Title>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;