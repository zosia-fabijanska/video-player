import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    margin-top: 10px;
`;

const Details = styled.div`
    padding: 32px 0px;
`;

const Title = styled.div`
    font-size: 1.5em;
    color: #4a4;    
`;

const Description = styled.div`
    color: #4a4a4a;
    font-family: Helvetica, sans-serif;
    padding-top: 12px;
`;

const VideoDetail = ({video}) => {
    if (!video) {
        return (
            <div>Loading</div>
        );
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${ videoId }`;

    return (
        <VideoContainer className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={ video.snippet.title } src = { url }></iframe>
            </div>
            <Details>
                <Title>{ video.snippet.title }</Title>
                <Description>{ video.snippet.description }</Description>
            </Details>
        </VideoContainer>
    )
};

export default VideoDetail;