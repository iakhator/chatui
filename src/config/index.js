import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=tqNB9BqXDR33'
});

export default instance
