import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video);

    const videoURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    const mainImage = styled.img`
        border: 2px solid black;
    `
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoURL} alt="video thumbnail"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;