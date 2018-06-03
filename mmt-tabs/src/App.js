import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tab2Question from './Tab2Question';
import Tab2AnswerList from './Tab2AnswerList';
import Tab2SubmitQuery from './Tab2SubmitQuery';
import FlightDetails from './FlightDetails';

class App extends Component {
  constructor(){
    super();
    this.state = {
      commentList : [
        {
          upVote : '3',
          timeStamp : 'Asked by kayode 14 hours 36 minutes ago',
          desc : 'You cannot change the color of individual path at runtime. Looking at the source code of VectorDrawableCompat, the only method to expose the inner element by name is getTargetByName which is present in inner private state class VectorDrawableCompatState of VectorDrawableCompat.',
          tags :   {
              comment : '18 comments',
              blog : 'blog this',
              link : 'category : <a href="javascript:void(0)">links</a>'
            }
           },
        {
          upVote : '1',
          timeStamp : 'Asked by kayode 14 hours 36 minutes ago',
          desc : 'You cannot change the color of individual path at runtime. Looking at the source code of VectorDrawableCompat, the only method to expose the inner element by name is getTargetByName which is present in inner private state class VectorDrawableCompatState of VectorDrawableCompat.',
          tags :  {
              comment : '13 comments',
              blog : 'blog this',
              link : 'category : <a href="javascript:void(0)">links</a>'
            }
        }
      ]
    }
  }

  updateList(stack){
    console.log(this)
    window.console.log(stack);
    let fullArray = this.state.commentList;
    fullArray.push(stack);
    this.setState({commentList: fullArray});
  }

  render() {
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>TAB 1</Tab>
            <Tab>TAB 2</Tab>
          </TabList>

          <TabPanel>
            <FlightDetails />
          </TabPanel>
          <TabPanel>
            <Tab2Question />
            <Tab2AnswerList list={this.state.commentList} />
            <Tab2SubmitQuery updateFunc={this.updateList.bind(this)} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
