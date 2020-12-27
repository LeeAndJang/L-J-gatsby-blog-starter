import React from 'react';

export const ThumbnailImage = ({ path, style }) => {
  return (
    <div style={path ? style : null}>
      <img src={path} alt="" />
    </div>
  );
};
