import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import { signUpStart } from "../../../redux/user/userActions";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I need to create an account</SignUpTitle>
      <span>Sign up with your email</span>
      <form className='sign-up-form' onSubmit={onSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={onChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
          label='Confirm Password'
          required
        />
        <Button type='submit'>CREATE ACCOUNT</Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
