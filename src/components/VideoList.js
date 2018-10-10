import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;

  const videoItems = videos.map(video => (
    <VideoListItem onVideoSelect={onVideoSelect} videoSingle={video} key={video.id.videoId} />
  ));

  return <ul className="col-lg-4 col-md-5 col-sm-12 list-group mt-0">{videoItems}</ul>;
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
