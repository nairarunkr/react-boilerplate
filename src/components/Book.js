import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book__info">
          {
            this.props.title && <p name="title" className="book__key">Title: 
              <span name="titleValue" className="book__value"> {this.props.title}</span>
            </p>
          }
          {
            this.props.author && <p name="author" className="book__key">Author: 
              <span name="authorValue" className="book__value"> {this.props.author}</span>
            </p>
          }
          {
            this.props.publisher && <p name="publisher" className="book__key">Publisher: 
                <span name="publisherValue" className="book__value"> {this.props.publisher}</span>
             </p>
          }
          {
            this.props.genre && <p name="genre" className="book__key">Genre: 
              <span name="genreValue" className="book__value"> {this.props.genre}</span>
             </p>
          }
          {
            this.props.pages && <p name="pages" className="book__key">Pages:
                <span name="pagesValue" className="book__value"> {this.props.pages}</span>
               </p>
          }
          {
            this.props.saleindex && <p name="saleindex" className="book__key">Sale Index: 
              <span name="saleIndexValue" className="book__value"> {this.props.saleindex}</span>
             </p>
          }
          {
            this.props.error && <p name="error" className="book__key">
              <span name="errorValue">{this.props.error}</span>
            </p>
          }
      </div>
    );
  }
}

export default Book;