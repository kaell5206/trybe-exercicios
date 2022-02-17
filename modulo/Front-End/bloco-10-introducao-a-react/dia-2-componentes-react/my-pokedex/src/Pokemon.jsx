import React, { Component } from "react";



class Pokemon extends Component {
  render() {
    return <div className="card-body">
      <div className="info-body">
      <h3>Name: {this.props.poke.name}</h3>
      <p>Type: {this.props.poke.type}</p>
      <p>Average Weight: {this.props.poke.averageWeight.value}{this.props.poke.averageWeight.measurementUnit}</p>
      </div>
      <div className="image-info-body">
        <img src={this.props.poke.image} alt={this.props.poke.name}/>
        <p><a href={this.props.poke.moreInfo} target="_blank" rel="noopener noreferrer">More here.</a></p>
      </div>
    </div>
  }
}

export default Pokemon;