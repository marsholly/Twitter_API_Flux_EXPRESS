import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  recieveSearchResults(result) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_SEARCH_RESULTS',
      payload: { result }
    })
  },

  recieveSavedTweets(savedTweets) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_SAVED_TWEETS',
      payload: { savedTweets }
    })
  }
}

export default ServerActions;
