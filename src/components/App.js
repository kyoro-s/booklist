// Libraries
import React, { Component } from 'react';
import bookDB from './Database';
import BookRepository from './BookRepository';
import Search from './Search';
import BookList from './BookList';


// Components
class App extends Component {
  constructor(props) {
    super(props);
    const remote = require('electron').remote; 
    this.appFolder = remote.getGlobal('sharedObj').appFolder;
    this.state = { list: [], searchTerm: "" };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item._id !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
  }
  
  componentDidMount() {
    const repo = new BookRepository(bookDB);
    console.log("componentDidMount");
    repo.findAll().then(books => {
      console.log("books:");
      console.log(books);
      this.setState({ list: books })
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const { list, searchTerm } = this.state; 
    console.log(list);
    return (
      <div>
        <h2>{helloWorld}</h2>
        <div>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
        Search
        </Search>
        </div>
        <BookList
          list={list}
          searchTerm={searchTerm}
          appFolder={this.appFolder}
        />
      </div>
    );
  }
}

export default App;
