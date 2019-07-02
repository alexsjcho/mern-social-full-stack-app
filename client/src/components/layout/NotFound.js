import React, { Fragment } from 'react';

const notFoundGIF = 'https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
      <img
        src={notFoundGIF}
        style={{ width: '400px', margin: 'auto', display: 'block' }}
        alt='Page not found...'
      />
    </Fragment>
  );
};

export default NotFound;
