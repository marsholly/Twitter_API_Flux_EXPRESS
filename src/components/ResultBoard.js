import React, { Component } from 'react';
// import TwitterActions from '../actions/TwitterActions';
import TwitterStore from '../stores/TwitterStore';

export default class ResultBoard extends Component {
  constructor() {
    super();

    this.state = {
      results: TwitterStore.getSearchResults()
    };

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    TwitterStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TwitterStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: TwitterStore.getSearchResults()
    });
  }

  render() {
    let { results } = this.state;
    let Results = [];
    if (results) {
      Results = results.map(result => {
        let { user, id, text, created_at } = result;
        let { profile_image_url, name, screen_name } = user;
        return (
          <div className="col-md-3" key={id}>
            <div className='tweetContainer'>
              <div className='topC'>
                <div className='picDiv'><img className="img-circle" src={profile_image_url} width="80" height="80"/></div>
                <div className='nameDiv'>
                  <p>Name: {name}</p>
                  <p>Username: {screen_name}</p>
                </div>
              </div>
              <div className='middleC'>{text}</div>
              <div className='footC'>{created_at}</div>
            </div>
          </div>
        )
      });
    }
    return (
      <div className="row">
        {Results}
      </div>
    )
  }
};
