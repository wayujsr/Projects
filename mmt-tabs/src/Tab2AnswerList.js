import React, { Component } from 'react';
import GetLi from './GetLi';
import {Vote} from './Vote';

class Tab2AnswerList extends Component {
  constructor(props){
    super(props)
    this.state = {
      commentList : this.props.list
    }
  }

  upVote(){

  }

  renderList() {
    let list = this.state.commentList.map((elm,index)=>{
      return (
        <div className="answer-list" key={index}>
        <Vote value={elm.upVote} />
        <div className="right-panel">
          <div className="timeStamp">{elm.timeStamp}</div>
          <div className="desc">{elm.desc}</div>
          <GetLi value={elm.tags} />
        </div>
      </div>
      );
    })
    return list;
  }

  render() {
    return (
      this.renderList()
    );
  }
}

export default Tab2AnswerList;