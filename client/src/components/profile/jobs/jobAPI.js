export const fetchData = (getJobs) => {
  let url = 'https://boards.greenhouse.io/vaulttec/';
  let request = new Request(url);

  return fetch(request)
    .then((response) => response.json())
    .then((data) => data)
    .catch((event) => alert('Try again!'));
};
