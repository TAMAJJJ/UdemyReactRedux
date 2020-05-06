
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID lqh7yNwrSa2yMkC2FG_tTTxKn0KGAtSHfbfsK8vP_ts'
  }
});
