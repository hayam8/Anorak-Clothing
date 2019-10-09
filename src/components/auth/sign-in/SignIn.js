import React, { Component } from "react";

import "./sign-in.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    this.clearForm();
  };

  onChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  clearForm = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.onChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.onChange}
            required
          />
          <label>Password</label>

          <input type='submit' value='Sign In' />
        </form>
      </div>
    );
  }
}

export default SignIn;
