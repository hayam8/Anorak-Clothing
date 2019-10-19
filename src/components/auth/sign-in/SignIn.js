import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import {
  googleSignInStart,
  emailSignInStart
} from "../../../redux/user/userActions";

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
    const { emailSignInStart } = this.props;

    const { email, password } = this.state;

    emailSignInStart(email, password);
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
    const { googleSignInStart } = this.props;
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
            <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
