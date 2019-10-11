import React from "react";
import SignIn from "../../components/auth/sign-in/SignIn";
import SignUp from "../../components/auth/sign-up/SignUp";

import "./sign-in-and-sign-up.scss";

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
