import React, { Component } from 'react';

export class Vote extends Component {
  constructor(props){
    super(props)
    this.state = {
      vote : this.props.value,
      clicked: false,
      other : '',
      classInc : 'fa fa-caret-up',
      classDec : 'fa fa-caret-down',
    }
  }

  upVote(){
    if(!this.state.clicked || this.state.other !== 'up'){
    this.setState({
      vote: parseInt(this.state.vote,10) + 1,
      clicked: true,
      other: 'up',
      classInc : 'fa fa-caret-up active',
      classDec : 'fa fa-caret-down'
    });
  }
  }

  downVote(){
    if(!this.state.clicked || this.state.other !== 'down'){
      if(parseInt(this.state.vote) !== 0){
        this.setState({
          vote: parseInt(this.state.vote,10) - 1,
          clicked: true,
          other: 'down',
          classInc : 'fa fa-caret-up',
          classDec : 'fa fa-caret-down active'
        });
      }
    }
  }

  render() {
    return (
      <div className="vote-panel">
        <i className={this.state.classInc} onClick={this.upVote.bind(this)}></i>
        <div>{this.state.vote}</div>
        <i className={this.state.classDec} onClick={this.downVote.bind(this)}></i>
      </div>
    );
  }
}
