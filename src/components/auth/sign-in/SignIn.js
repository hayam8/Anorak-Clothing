import React, { Component } from "react";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

import "./sign-in.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.clearState();
    } catch (e) {
      console.log(e);
    }
  };

  onChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  clearState = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
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
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
