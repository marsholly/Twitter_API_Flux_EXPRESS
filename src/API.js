import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  fetchSearchResult(result) {
    axios.get(`/api/twitters/${result}`)
      .then(res => res.data)
      .then(ServerActions.recieveSearchResults)
      .catch(console.error)
  }
}

export default API;
