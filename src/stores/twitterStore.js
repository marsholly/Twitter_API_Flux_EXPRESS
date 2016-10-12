import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _results = [];

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
}

export default new TwitterStore();
