import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (query, page = 1) => {
  const resp = await axios.get(
    `/?q=${query}&page=${page}&key=38304723-3ccc87e605612703ee79a288f&image_type=photo&orientation=horizontal&per_page=12`
  );
  return resp.data;
};
