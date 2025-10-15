import React from 'react';

const Simple3DViewer = ({ 
  modelId = "39177ad7f302433e8a8af343bc5a5d1a",
  height = "400px",
  autoplay = 1,
  autospin = 0.2,
  className = ""
}) => {
  const sketchfabUrl = `https://sketchfab.com/models/${modelId}/embed?autostart=${autoplay}&autospin=${autospin}&camera=0&preload=1&transparent=0&ui_controls=1&ui_infos=0&ui_inspector=0&ui_watermark=0`;

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <iframe
        title="Modern House 3D Model"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src={sketchfabUrl}
        className="w-full h-full rounded-lg shadow-xl"
      />
    </div>
  );
};

export default Simple3DViewer;