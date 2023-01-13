import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID cDAiV_p6AbcnkAGwwUtMVfO6TLjGu-7RKarKKXof_8s',
  },
});
