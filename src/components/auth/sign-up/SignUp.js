import React, { Component } from "react";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import {
  auth,
  createUserProfileDocument
} from "../../../firebase/firebase.utils";

import "./sign-up.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  clearForm = () => {
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      this.clearForm();
    } catch (e) {
      console.error(e);
    }
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I need to create an account</h2>
        <span>Sign up with your email</span>
        <form className='sign-up-form' onSubmit={this.onSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.onChange}
            label='Display Name'
            required
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.onChange}
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.onChange}
            label='Password'
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.onChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'>CREATE ACCOUNT</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
