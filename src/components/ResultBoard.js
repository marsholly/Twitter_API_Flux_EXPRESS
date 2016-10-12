import React, { Component } from 'react';
import TwitterActions from '../actions/TwitterActions';
import TwitterStore from '../stores/TwitterStore';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 0,
};

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

  _saveTweet(result, e) {
    e.preventDefault();
    result.favorited = true;
    TwitterActions.sendSavedTweet(result);
  }

  render() {
    let { results, saveTag } = this.state;
    let Results = [];
    if (results) {
      Results = results.map(result => {
        let { user, id, text, favorited} = result;
        let { profile_image_url, name, screen_name, created_at } = user;
        return (
          <div className="col-sm-6 col-md-3" key={id}>
            <div className='thumbnail'>
              <div className="row">
                <div className="imgDiv">
                  <img className="img-circle" src={profile_image_url} width="80" height="80"/>
                </div>
                <div className='nameDiv'>
                  <p className="name">{name}</p>
                  <p className="screenName"> {screen_name}</p>
                </div>
              </div>
              <hr/>
              <div className="caption">
                <p>{text}</p>
                <p className="timeStamp">{moment(Date.parse(created_at)).format('lll')}</p>
              </div>
              <RaisedButton label="FAVORITE" secondary={true} disabled={favorited} style={style} fullWidth={true} onClick={this._saveTweet.bind(this, result)}/>
            </div>
          </div>
        )
      });
    }
    return (
      <div className="row">
        <div className="main">
          {Results}
        </div>
      </div>
    )
  }
};
