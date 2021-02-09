import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{ this.props.toyData.name }</h2>
        <img src={ this.props.toyData.image } alt={ this.props.toyData.name } className="toy-avatar" />
        <p>{this.props.toyData.likes} Likes </p>
        <button onClick={() => this.props.updateLikes(this.props.toyData)}
        className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.props.deleteToy(this.props.toyData.id)} 
        className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
