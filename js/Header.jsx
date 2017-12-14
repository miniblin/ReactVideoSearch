import { bool, func, string } from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {setSearchTerm} from './actionCreators'

const Header = props => {
  let utilSpace;
  const {showSearch, handleSearchTermChange, searchTerm} = props
  if (showSearch) {
    utilSpace = ( <input
        onChange={handleSearchTermChange}
        value={searchTerm}
        type="text"
        placeholder="Search"
      />)
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

export default Header;

Header.propTypes ={
    showSearch: bool,
    handleSearchTermChange:func,
    searchTerm:string
   }
Header.defaultProps ={
    showSearch: false,
    handleSearchTermChange:null,
    searchTerm:''
}