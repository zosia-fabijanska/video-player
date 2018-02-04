import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    color: #4a4;
    font-size: .95em;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
`;

const Image = styled.img`
    max-width: 100px;
`;

const ListItem = styled.li`
    cursor: pointer;
    padding: 12px;
    margin-top: 10px;
    background-color: #f5f5f5;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    list-style-type: none;
    &:hover {
        background-color: #cccccc;
    }
`;

const VideoListItem = ({ video, onVideoSelect }) => {

    const videoURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;


    return (
        <ListItem onClick = { () => onVideoSelect(video) }>
            <div>
                <div className = "media-left">
                    <Image src = { videoURL } alt = "video thumbnail"/>
                </div>
                <div className = "media-body">
                    <Title>{ videoTitle }</Title>
                </div>
            </div>
        </ListItem>
    )
};

export default VideoListItem;