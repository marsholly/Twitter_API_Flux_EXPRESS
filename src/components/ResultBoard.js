import React, { Component } from 'react';
import TwitterActions from '../actions/TwitterActions';
import TwitterStore from '../stores/TwitterStore';
import moment from 'moment';

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
    TwitterActions.sendSavedTweet(result);
  }

  render() {
    let { results } = this.state;
    let Results = [];
    if (results) {
      Results = results.map(result => {
        let { user, id, text } = result;
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
                <p><a href="#" className="btn btn-primary" role="button" onClick={this._saveTweet.bind(this, result)}><i className="glyphicon glyphicon-floppy-save"></i></a></p>
              </div>
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
