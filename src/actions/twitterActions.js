import API from '../API';

const TwitterActions = {
  fetchSearchResult(result) {
    API.fetchSearchResult(result);
  },

  sendSavedTweet(result) {
    API.sendSavedTweet(result);
  },

  getAllTweets() {
    API.getAllTweets();
  },

  removeSavedTweet(id) {
    API.removeSavedTweet(id);
  }
}

export default TwitterActions;
