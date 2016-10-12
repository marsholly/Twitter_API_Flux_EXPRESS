import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  recieveSearchResults(result) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_SEARCH_RESULTS',
      payload: { result }
    })
  }
}

export default ServerActions;
