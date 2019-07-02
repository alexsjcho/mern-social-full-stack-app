import React from 'react';
import { fetchData } from './jobAPI';

const DisplayJobs = () => {
  const fetchJobData = () => {
    fetchData().then((data) => {});
  };

  return <div />;
};

export default DisplayJobs;
