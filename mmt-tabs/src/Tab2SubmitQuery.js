import React, { Component } from 'react';
import validator from 'validator';
import Form from 'react-validation/build/form';
//https://www.npmjs.com/package/react-validation
import Input from 'react-validation/build/input';


const required = (value) => {

  if (!value.toString().trim().length) {
    return <span className="error"> This field is required.</span>
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return <span className="error"> {value} is not a valid email.</span>
  }
};

const number = (value) => {
  if (isNaN(value)) {
    return <span className="error"> {value} is not a valid number.</span>
  }
};

class Tab2SubmitQuery extends Component {
  constructor(props){
    super(props)
    this.state={
      charLeft : 0,
      commentBox: 'hide error'
    }
  }
  
  charLeft(e){
    if(!e.target.value.length){
      this.setState({commentBox: ' error'});
    }else{
      this.setState({commentBox: 'hide error'});
    }
    this.setState({charLeft:e.target.value.length});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!event.target.elements.commentBox.value.length){
      this.setState({commentBox: 'error'});
      this.form.validateAll();
    }else{
      this.setState({commentBox: 'hide error'});
      let name = document.getElementById('name').value,
        email =  document.getElementById('email').value,
        number =  document.getElementById('number').value,
        commentBox  = document.getElementById('commentBox').value,
        stack = {
          upVote : '0',
          timeStamp : `Asked by ${name} 14 hours 36 minutes ago`,
          desc : commentBox,
          tags : {
              comment : `18 comments`,
              blog : 'blog this',
              link : 'category : <a href="javascript:void(0)">links</a>'
          }
        };
        this.props.updateFunc(stack);
    }
};

removeApiError = () => {
    this.form.hideError(this.userInput);
};

  render() {
    return (
      <Form className="form" id="form" ref={c => { this.form = c }} onSubmit={this.handleSubmit.bind(this)} >
        <div className="firstRow">
          <div><Input value='' placeholder="Enter your name" id="name" name='name' validations={[required]} /></div>
          <div><Input value='' placeholder="Enter your email Id" id='email' name='email' validations={[required, email]} /></div>
          <div><Input value='' placeholder="Enter your number" id='number' name='number' validations={[required, number]} /></div>
        </div>
        <div className="firstRow">
          <div className="row">
            <textarea className={this.state.commentBox} placeholder="Enter your comment" maxLength="200" id="commentBox" name="commentBox" onKeyUp={this.charLeft.bind(this)}></textarea>
            <div className={this.state.commentBox}>Please enter your comments</div>
          </div>
        </div>

        <div className="char-left">{this.state.charLeft} of 200 characters left</div>
        <div id="charcount_text"></div>
        <div>
          <button>Submit</button>
        </div>
      </Form>
    );
  }
}

export default Tab2SubmitQuery;