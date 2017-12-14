import { string } from 'prop-types';
import React, {Component} from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper =styled(Link)`
  width:32%;
  border: 2px solid #333;
  bordeer-radius: 4px;
  margin-bottom:25px;
  padding-right:10px;
  overflow:hidden;
  color:#000;
  text-decoration: none;
`;

const Image = styled.img`
  width:45%;
  float:left;
  margin-right:10px;
`

class ShowCard extends Component  {
  shouldComponentUpdate(){
    return false
  }
  
  render(){
    const {imdbID, poster, title, year, description} = this.props
    return(
      
  <Wrapper to={`/details/${imdbID}`}>
    
    <Image
      alt={`${this.props.title} Show Poster`}
      src={`/public/img/posters/${poster}`}
    />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>

    </div>
   
  </Wrapper>
    )

  }
}

ShowCard.propTypes ={
  poster:string.isRequired,
  title:string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
}
export default ShowCard;
