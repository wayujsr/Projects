import React, { Component } from 'react';

class BaggageData extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    let list = this.props.data.map((elm,index)=>{
      return(
        <li key={index}><img src="./img/checkin-icon.jpg" />{elm.dtl}</li>
      )
    });
    return (
      <ul className="bagg-chk clearfix">
        {list}
      </ul>
    );
  }
}

export default BaggageData;