import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import { signUpStart } from "../../../redux/user/userActions";
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

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signUpStart({ displayName, email, password });
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

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
