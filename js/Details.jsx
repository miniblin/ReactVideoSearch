import { func, shape, string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAPIDetails } from './actionCreators';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
 
  componentDidMount() {
    if(!this.props.rating){
        this.props.getAPIData()
    }
  }

  render() {
    const { show } = this.props;
    let ratingComponent;

    if (this.props.rating) {
        ratingComponent = <h3>{this.props.rating}</h3>
    }
    else{
        ratingComponent =<Spinner/>
    }

    const { title, description, year, poster, trailer } = show;

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>

        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state,ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {}
  return {
    rating:apiData.rating
  }

}

const mapDispatchToProps = (dispatch,ownProps) =>({
  getAPIData(){
    dispatch(getAPIDetails(ownProps.show.imdbID))
  }
}) 
export default connect(mapStateToProps,mapDispatchToProps)(Details);

Details.propTypes = {
  show: shape().isRequired,
  rating: string,
  getAPIData:func.isRequired

};

Details.defaultProps = {
  rating:""
}
