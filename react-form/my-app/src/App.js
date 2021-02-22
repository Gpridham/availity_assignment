import './App.css';
import React from 'react';

import Cleave from "cleave.js/react";
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.us';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      npiNum: '',
      businessAddress: '',
      phoneNum: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("Setting state")

    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log("On submit clicked: " + JSON.stringify(this.state, null, 4))
    alert("Registration Complete")
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="registration-form">
        <h1 className="form-title">Availity Registration</h1>
        <div className="form">
          <label className="required">First Name</label>
          <input type="text" name="firstName" required value={this.state.firstName} onChange={this.handleChange}></input>

          <label className="required">Last Name</label>
          <input type="text" name="lastName" required value={this.state.lastName} onChange={this.handleChange}></input>

          {/* National Provider Identifier (10-digit number) */}
          <label className="required">NPI Number</label>
          <input type="text" pattern="[0-9]+" maxLength={10} name="npiNum" required value={this.state.npiNum} onChange={this.handleChange}></input>

          <label className="required">Business Address</label>
          <input name="businessAddress" required value={this.state.businessAddress} onChange={this.handleChange}></input>

          <label className="required">Telephone Number</label>
          <Cleave required name="phoneNum" options={{phone: true, phoneRegionCode: 'US' }} onChange={this.handleChange}/>

          <label className="required">Email Address</label>
          <input name="email" required value={this.state.email} onChange={this.handleChange}></input>

          <div className="bottom-btn">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
          
        </div>
        
        
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="body">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
