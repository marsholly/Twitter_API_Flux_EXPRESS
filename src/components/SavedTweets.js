import React, { Component } from 'react';
import TwitterStore from '../stores/TwitterStore';
import TwitterActions from '../actions/TwitterActions';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 0,
};

export default class SavedTweets extends Component {
  constructor () {
    super();

    this.state = {
      tweets: TwitterStore.getSavedTweets()
    };

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    TwitterActions.getAllTweets();
    TwitterStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TwitterStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      tweets: TwitterStore.getSavedTweets()
    });
  }

  _removeTweet(id) {
    TwitterActions.removeSavedTweet(id);
  }

  render() {
    let { tweets } = this.state;
    let Tweets = [];
    if (tweets) {
      Tweets = tweets.map(tweet => {
        let { user, id, text } = tweet;
        let { profile_image_url, name, screen_name, created_at } = user;
        return (
          <div className="col-sm-6 col-md-3" key={id}>
            <div className="thumbnail">
              <div className="row">
                <div className="imgDiv">
                  <img className="img-circle" src={profile_image_url} width="80" height="80"/>
                </div>
                <div className='nameDiv'>
                  <h4>{name}</h4>
                  <h5> {screen_name}</h5>
                </div>
              </div>
              <hr/>
              <div className="caption">
                <p>{text}</p>
                <p>{moment(Date.parse(created_at)).format('lll')}</p>
              </div>
              <RaisedButton
              label="DELETE"
              style={style}
              onClick={this._removeTweet.bind(this, id)}
              fullWidth={true}
              backgroundColor='#7E57C2'
              labelColor = 'white'
              />
            </div>
          </div>
        )
      });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="main">
            {Tweets}
          </div>
        </div>
      </div>
    )
  }
};
