import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
  const videoSource = './../../../assets/video/zoomtocoorg.mp4';
  return (
    <div className={classes.Container}>
      <video
        width="100%"
        autoPlay="autoplay"
        loop="loop"
        muted
        className={classes.Video}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}></div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
