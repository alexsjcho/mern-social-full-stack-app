import React, { Fragment } from 'react';

const spinner = 'https://media.giphy.com/media/EBdPXuGKmAkjm/giphy.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
