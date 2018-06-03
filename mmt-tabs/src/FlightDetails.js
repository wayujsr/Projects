import React, {Component} from 'react';
import BaggageData from './BaggageData';
import JourneyDetails from './JourneyDetails';

class FlightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [{
        title: 'Departure',
        titleArrow: 'fa fa-arrow-circle-right',
        BookingDate: 'New Delhi to Paris, 9 Jul',
        BookingTime: 'TravelDate',
        FlightName: 'Aeroflot SU 4456',
        FlightImg: './img/flight-logo.jpg',
        DepLocation: 'DEL',
        DepTime: '21:00',
        DepDate: '12 Jul 16, Fri',
        DepPlace: 'Thiruvananthapuram, Kerala',
        TravelTime: '4h 30min ',
        ArrLocation: 'DEL',
        ArrTime: '21:00',
        ArrDate: '12 Jul 16, Fri',
        ArrPlace: 'Thiruvananthapuram, Kerala',
        Baggage: 'BAGGAGE ALLOWANCE FOR ADULT',
        BaggageWarn: 'Baggage Warning in case of Multiple Airlines',
        BaggageData: [
          {
            dtl : 'Check-in : 15 kgs for adult',
          },
          {
            dtl: 'Cabin : 7 kgs for adult',
          },
          {
            dtl: 'Check-in : 15 kgs for adult',
          }
        ],
        TravelDetail: 'New Delhi to Bangkok (Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum)',
        FlightDetail: [{
            FlightDes: 'BKK',
            RadioName : 'des',
            FlightDesTime: '03:35',
            FlightStop: '4h 30m | Nonstop',
            FlightArr: 'BKK',
            FlightArrTime: '03:35',
          },
          {
            FlightDes: 'BKK',
            RadioName : 'des',
            FlightDesTime: '03:35',
            FlightStop: '4h 30m | Nonstop',
            FlightStopage: 'BOM',
            FlightArr: 'BKK',
            FlightArrTime: '03:35',
          }
        ],
        more: 'More Timing Options'
      },
      {
        title: 'Departure',
        titleArrow: 'fa fa-arrow-circle-left',
        BookingDate: 'New Delhi to Paris, 9 Jul',
        BookingTime: 'TravelDate',
        FlightName: 'Aeroflot SU 4456',
        FlightImg: './img/flight-logo.jpg',
        DepLocation: 'DEL',
        DepTime: '21:00',
        DepDate: '12 Jul 16, Fri',
        DepPlace: 'Thiruvananthapuram, Kerala',
        TravelTime: '4h 30min ',
        ArrLocation: 'DEL',
        ArrTime: '21:00',
        ArrDate: '12 Jul 16, Fri',
        ArrPlace: 'Thiruvananthapuram, Kerala',
        Baggage: 'BAGGAGE ALLOWANCE FOR ADULT',
        BaggageWarn: 'Baggage Warning in case of Multiple Airlines',
        BaggageData: [{
          dtl: 'Check-in : 15 kgs for adult',
          },
          {
            dtl: 'Cabin : 7 kgs for adult',
          },
          {
            dtl: 'Check-in : 15 kgs for adult',
          }],
        TravelDetail: 'New Delhi to Bangkok (Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum)',
        FlightDetail: [{
            FlightDes: 'BKK',
            FlightDesTime: '03:35',
            RadioName : 'arr',
            FlightStop: '4h 30m | Nonstop',
            FlightArr: 'BKK',
            FlightArrTime: '03:35',
          },
          {
            FlightDes: 'BKK',
            FlightDesTime: '03:35',
            RadioName : 'arr',
            FlightStop: '4h 30m | Nonstop',
            FlightStopage: 'BOM',
            FlightArr: 'BKK',
            FlightArrTime: '03:35',
          }],
        more: 'More Timing Options',
      }]
    }
  }
  

  travelList(){
    
    let list = this.state.list.map((elm, index) => {
    return ( 
          <div className="panel clearfix" key={index}>
            <div>
              <i className={elm.titleArrow}></i>
              <div className="dep-tt">{elm.title}</div>
            </div>
            <div className="booking-row clearfix">
              <div className="date">{elm.BookingDate}</div>
              <div className="time">{elm.BookingTime}</div>
            </div>
            <div className="flight-icon"><img src={elm.FlightImg} alt="logo" /></div>
            <div className="flight-name">{elm.FlightName}</div>

            <div className="flight-details">
              <div className="flight-left">
                <div className="travel-loc">
                  <span>{elm.DepLocation}</span>
                  <span>{elm.DepTime}</span>
                </div>
                <div className="date-time">{elm.DepDate}</div>
                <div className="locations">{elm.DepPlace}</div>
              </div>
              <div className="flight-left right">
                <div className="travel-loc">
                  <span>{elm.ArrLocation}</span>
                  <span>{elm.ArrTime}</span>
                </div>
                <div className="date-time">{elm.ArrDate}</div>
                <div className="locations">{elm.ArrPlace}</div>
              </div>
              <div className="tr-tm">
                <span className="before"></span>
                <span className="after"></span>
                <div>{elm.TravelTime}</div>
              </div>
            </div>

            <div className="bagg-tt">{elm.Baggage}</div>
            <div className="bagg-wrn">{elm.BaggageWarn}</div>
            <BaggageData data={elm.BaggageData} />

            <div className="flt-wrapper">
            <div className="flt-list">
              <div className="flt-hd">{elm.TravelDetail}</div>
              <JourneyDetails data={elm.FlightDetail} />
            </div>
            </div>


          </div>
        );
    });

    return list;
  }
  render() {
    return <div className="tab-one">
        {this.travelList()}
      </div>
  }
}

export default FlightDetails;