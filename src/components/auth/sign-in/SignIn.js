import React, { Component } from "react";
import FormInput from "../../form-input/FormInput";

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
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.onChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.onChange}
            label='password'
            required
          />
          <input type='submit' value='Sign In' />
        </form>
      </div>
    );
  }
}

export default SignIn;
