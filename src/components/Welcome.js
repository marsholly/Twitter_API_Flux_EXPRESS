import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">Welcome to Twitter App</h1>
            <div className="content">
              <p className='intro' >Welcome to our app, created by Holly and John. Search tweets on our 'Search' Page. Hit the save button to save a tweet. Check out your saved tweets on the 'Saved Tweets' page. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
