import axios from 'axios';

const KEY = 'AIzaSyCBpKQx32XJ5wJOANxc75Bx7hnb4l0bf2U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
