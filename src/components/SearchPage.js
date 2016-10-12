import React, { Component } from 'react';
import TwitterActions from '../actions/TwitterActions';
import ResultBoard from './ResultBoard';

export default class SearchPage extends Component {
  constructor() {
    super();
    this.searchResult = this.searchResult.bind(this);
  }

  searchResult() {
    let result = this.refs.tweet.value;
    TwitterActions.fetchSearchResult(result);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="searchBar">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." ref="tweet"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.searchResult}>
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <ResultBoard />
      </div>
    )
  }
};
