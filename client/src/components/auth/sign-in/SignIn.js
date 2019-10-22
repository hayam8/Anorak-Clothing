import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import {
  googleSignInStart,
  emailSignInStart
} from "../../../redux/user/userActions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./signin.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const onSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const onChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Already have an account?</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={onChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={onChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </Button>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
