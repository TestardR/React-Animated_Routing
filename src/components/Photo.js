import React, { useState } from 'react';
import photo1 from '../static/images/pic1.jpg';
import photo2 from '../static/images/pic2.jpg';

const Photo = () => {
  const [photos] = useState([
    { id: 1, url: `${photo1}` },
    { id: 2, url: `${photo2}` }
  ]);

  const style = {
    width: '40%',
    height: '40%'
  };

  const renderPhoto = () => {
    return photos.map(photo => {
      return <img style={style} key={photo.id} src={photo.url} />;
    });
  };

  return <div>{renderPhoto()}</div>;
};

export default Photo;
