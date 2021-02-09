import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleSubmit(e){
    e.preventDefault()
    let newToy = {
      name: this.state.name,
      image: this.state.image
    }
    
    let reqObj = {}
      reqObj.headers = {"Content-Type": "application/json"}
      reqObj.method = "POST"
      reqObj.body = JSON.stringify(newToy)

    fetch('http://localhost:3000/toys', reqObj)
      .then(res => res.json())
      .then(newToy => this.props.addNewToy(newToy))
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={(e) => this.setState({name: e.target.value})} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={(e) => this.setState({image: e.target.value})} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
