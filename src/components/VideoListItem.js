import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = (props) => {
  const { videoSingle, onVideoSelect } = props;
  const imageUrl = videoSingle.snippet.thumbnails.default.url;
  // console.log(videoSingle);
  return (
    <a href="!#" onClick={() => onVideoSelect(videoSingle)}>
      <li className="list-group-item">
        <div className="media">
          <img className="mr-3" src={imageUrl} alt="thumbnail" />
          <div className="media-body">
            <h5 className="mt-0">{videoSingle.snippet.title}</h5>
          </div>
        </div>
      </li>
    </a>
  );
};

VideoListItem.propTypes = {
  videoSingle: PropTypes.object.isRequired,
};

export default VideoListItem;
