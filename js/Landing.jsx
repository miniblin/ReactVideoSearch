import { func, string, shape } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSearchTerm } from './actionCreators';

class Landing extends Component
{  
  goToSearch = (event) => {
    event.preventDefault()
    this.props.history.push('/search')

  }
  render(){
    return(
    <div className="landing">
      <h1>svideo</h1>
      <form onSubmit ={this.goToSearch}>
        <input  onChange={this.props.handleSearchTermChange} value= {this.props.searchTerm} type="test" placeholder="search" />
      </form>
      <Link to="/search">or Browse All</Link>
    </div>
    )
}

}

const mapStateToProps = state => ({searchTerm:state.searchTerm})

const mapDispatchToProps = (dispatch)=>({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})


export default connect(mapStateToProps, mapDispatchToProps) (Landing)

Landing.propTypes={
  searchTerm: string.isRequired,
  handleSearchTermChange: func.isRequired,
  history: shape().isRequired
}
