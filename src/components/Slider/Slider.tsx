import React from 'react';

import { useStyles } from './Slider.styles';

const Slider:React.FC = () => {
  const data = [
    'https://fastly.picsum.photos/id/866/466/620.jpg?hmac=xKeJj8ybyZKEHFQxWcIbgMwtrInMpbAiBXVfUwaCwk4',
    'https://fastly.picsum.photos/id/1067/466/620.jpg?hmac=xeBbvmHM4oCkTZCRVabtuJlD7u3fhyQTtolIAhmna2o',
    'https://fastly.picsum.photos/id/661/466/620.jpg?hmac=N7kazfFzjdGnpPxPDJERxHy45N1Y1zEEtGeb28llOBg',
    'https://fastly.picsum.photos/id/165/466/620.jpg?hmac=_uWSLTusuKKDqUeycKWy4lKtB5VZPIt4yiCta6xV7MU',
  ];

  const classes = useStyles();
  const [thumbnailIndex, setThumbnailIndex] = React.useState<number>(0);
  const [selectedThumbnail, setSelectedThumbnail] = React.useState<string>(data[thumbnailIndex]);

  const ThumbnailsContainer = data.map((image, index) => (
    <li
      key={image}
      onClick={() => {
        setSelectedThumbnail(image);
        setThumbnailIndex(index);
      }}
    >
      <img src={image} alt={image} />
    </li>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.thumbnails}>
        <ul>
          {ThumbnailsContainer}
        </ul>
      </div>

      <div className={classes.mainView}><img src={selectedThumbnail} alt={selectedThumbnail} /></div>
    </div>
  );
};

export default Slider;
