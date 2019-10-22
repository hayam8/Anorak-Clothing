import React, { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageSubtext
} from "./error-boundary.styles";

export class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png'></ErrorImageContainer>
          <ErrorImageText>This Page is Broken</ErrorImageText>
          <ErrorImageSubtext>
            A broken clock is right twice a day. But if you just have one clock,
            it’s impossible to tell exactly when the clock is right. So it could
            be right at any moment. And that brings you to the crux of the
            conceptualization. What is time? Nothing but an abyss. Clocks are
            just false attempts to harness its power. It’s cruel really.
          </ErrorImageSubtext>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
