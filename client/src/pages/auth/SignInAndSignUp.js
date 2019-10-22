import React from "react";
import SignIn from "../../components/auth/sign-in/SignIn";
import SignUp from "../../components/auth/sign-up/SignUp";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
