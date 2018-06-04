import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form'
import Book from './components/Book'
// let config = require('konfig')({
// path: '../conf'
// })
class App extends Component {

  state = {

    _id: undefined,
    author: undefined,
    title: undefined,
    description: undefined,
    publisher: undefined,
    genre: undefined,
    pages: undefined,
    saleindex: undefined,
    error: undefined

  }

  getBook = async (e) => {
    e.preventDefault();
    const author = e.target.elements.author.value;
  //  let port = ''
  //  if (process.env.NODE_ENV == 'real'){
  //    port = config.properties.real_port;
  //  }
  //  else {
  //    port = config.properties.virtual_port;
  //  }

    if(author){
      const api_call = await fetch(`http://localhost:8005/api/bookbyauthor/${author}`);
      const data = await api_call.json();
      console.log(data);
      this.setState({
        title: data[0].title,
        author: data[0].author,
        description: data[0].description,
        publisher: data[0].publisher,
        genre: data[0].genre,
        pages: data[0].pages,
        saleindex: data[0].saleindex,
        error: ""
      })
    } else {
      this.setState({
        author: undefined,
        title: undefined,
        description: undefined,
        publisher: undefined,
        genre: undefined,
        pages: undefined,
        saleindex: undefined,
        error: "Please enter a valid value for the author"
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container"><Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getBook={this.getBook} />
                  <Book
                  title={this.state.title}
                  author={this.state.author}
                  description={this.state.description}
                  publisher={this.state.publisher}
                  genre={this.state.genre}
                  pages={this.state.pages}
                  saleindex={this.state.saleindex}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
