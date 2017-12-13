import { string } from 'prop-types';
import React, { Component } from 'react';

import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state={
    searchTerm:''
  } 

  handleSearchTermChange= event=>{
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>hi there</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show => 
                `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase())>=0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;


Search.propTypes ={
  poster:string.isRequired,
  title:string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}