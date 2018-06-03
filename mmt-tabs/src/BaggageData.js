import React, { Component } from 'react';

class BaggageData extends Component {
  render() {
    let list = this.props.data.map((elm,index)=>{
      return(
        <li key={index}><img src="./img/checkin-icon.jpg" alt="icon" />{elm.dtl}</li>
      )
    });
    return (<ul className="bagg-chk clearfix">
        {list}
      </ul>);
  }
}

export default BaggageData;