import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = (props) => {
  const { video } = props;
  // Waiting for video to load
  if (!video) {
    return <div>Loading ...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-lg-8 col-md-7 col-sm-12">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="Youtube Video" className="embed-responsive-item" src={url} />
      </div>
      <div className="details mt-5">
        <h3>{video.snippet.title}</h3>
        <h5>{video.snippet.description}</h5>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {};

export default VideoDetail;
