import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="Title">
       <h1 className="title-container__title"> Book Finder </h1>
       <h3 className="title-container__subtitle">Find out tiltes, authors and more </h3>
      </div>
    );
  }
}

export default Title;