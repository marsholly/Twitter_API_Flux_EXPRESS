import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  fetchSearchResult(result) {
    axios.get(`/api/twitters/${result}`)
      .then(res => res.data)
      .then(ServerActions.recieveSearchResults)
      .catch(console.error)
  },

  sendSavedTweet(result) {
    axios.post('/api/twitters/save', result)
      .then(res => res.data)
      .then(ServerActions.recieveSavedTweets)
      .catch(console.error)
  },

  getAllTweets() {
    axios.get('/api/twitters/save')
      .then(res => res.data)
      .then(ServerActions.recieveSavedTweets)
      .catch(console.error)
  },

  removeSavedTweet(id) {
    axios.delete(`/api/twitters/save/${id}`)
      .then(res => res.data)
      .then(ServerActions.recieveSavedTweets)
      .catch(console.error)
  }
}

export default API;
