import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import {connect} from 'react-redux'
import Header from './Header';
import ShowCard from './ShowCard';

 const Search =(props)=> {
      const {shows, searchTerm} = props
      return(
      <div className="search">               
        <Header showSearch/>
        <div>
          {shows
            .filter(
              show => 
                `${show.title} ${show.description}`.toUpperCase()
                .indexOf(searchTerm.toUpperCase())>=0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    )
  }


const mapStateToProps= state => ({
  searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(Search)

Search.propTypes ={
 shows:arrayOf(shape()).isRequired,
 searchTerm: string.isRequired, 
}