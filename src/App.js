import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        toys: data
      })
    })
  }

  addNewToy = (newToy) => {
    this.setState({toys: [...this.state.toys, newToy]})
  }

  deleteToy = (id) => {
    // console.log(toy)
    fetch(`http://localhost:3000/toys/${id}`, {method: 'DELETE'})
    let newToys = this.state.toys.filter(toys => toys.id !== id)
    this.setState({
      toys: newToys
    })
  }

  updateLikes = (toy) => {
    let moreLikes = {
      likes: toy.likes + 1
    }
    
    let reqObj = {}
      reqObj.headers = {"Content-Type": "application/json"}
      reqObj.method = "PATCH"
      reqObj.body = JSON.stringify(moreLikes)
    
    fetch(`http://localhost:3000/toys/${toy.id}`, reqObj)
      .then(resp => resp.json())
      .then(newToy => {
        this.setState({
          toys: this.state.toys.map(toy => (toy.id === newToy.id) ? newToy : toy)
        })
      })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} updateLikes={this.updateLikes} />
      </>
    );
  }

}

export default App;
