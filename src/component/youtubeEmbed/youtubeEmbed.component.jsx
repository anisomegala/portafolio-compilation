import React from 'react';
import PropTypes from 'prop-types';

import './youtubeEmbed.style.scss';

const YoutubeEmbed = ({embedId}) => (

    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Aniel Y El Quilombo"
    />
  </div>

);


YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };


  export default YoutubeEmbed;