import React, { Component } from 'react';

class JourneyDetails extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  stoppage(stoppage){
    if(stoppage){
      return(<div className="flt-stopagge">{stoppage}</div>);
    }
  }
  render() {
    let list = this.props.data.map((elm,index)=>{
      return(
        <div className="flt-grid" key={index}>
          <div className="icn">
            <input type="radio" id={elm.RadioName+index} name={elm.RadioName} />
            <label htmlFor={elm.RadioName+index}></label>
          </div>
          <div className="flt-right">
            <div className="clm clm-left">
              <div className="flt-des">{elm.FlightDes} </div>
              <div className="flt-des-time">{elm.FlightDesTime} </div>
            </div>
            <div className="clm clm-right">
              <div className="flt-des">{elm.FlightArr} </div>
              <div className="flt-des-time">{elm.FlightArrTime} </div>
            </div>
            <div className="tr-tm">
              <span className="before"></span>
              <span className="after"></span>
              <div>{elm.FlightStop}</div>
              {this.stoppage(elm.FlightStopage)}
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="flt-row">
        {list}
      </div>
    );
  }
}

export default JourneyDetails;