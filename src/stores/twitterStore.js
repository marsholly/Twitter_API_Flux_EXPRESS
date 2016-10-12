import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _results = [];
let _savedTweets = [];

class TwitterStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_SEARCH_RESULTS':
          let { result } = action.payload;
          _results = result.statuses;
          this.emit('CHANGE');
          break;

        case 'RECIEVE_SAVED_TWEETS':
          let { savedTweets } = action.payload;
          _savedTweets = savedTweets;
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getSearchResults() {
    return _results;
  }

  getSavedTweets() {
    return _savedTweets;
  }
}

export default new TwitterStore();
