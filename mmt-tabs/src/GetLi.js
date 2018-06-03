import React, { Component } from 'react';

class GetLi extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    const value = this.props.value,
    link = this.props.value.link;
    return (
      <ul className="social-links">
        <li><a href="javascript:void(0)">{value.comment}</a></li>
        <li><a href="javascript:void(0)">{value.blog}</a></li>
        <li dangerouslySetInnerHTML={{__html: link}}></li>
      </ul>
    );
  }
}

export default GetLi;