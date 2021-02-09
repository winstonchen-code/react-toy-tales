import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard toyData={toy} deleteToy={props.deleteToy} updateLikes={props.updateLikes}/> )}
    </div>
  );
}

export default ToyContainer;
