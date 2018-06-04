import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="Form">
       <form onSubmit={this.props.getBook}>
        <input type="text" name="author" placeholder="Author.."/>
        <button name="GetBook">Get Book</button>
       </form>
      </div>
    );
  }
}

export default Form;