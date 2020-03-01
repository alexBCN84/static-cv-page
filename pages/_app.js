import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    let AppSSR = null;
    
    if (typeof window !== 'undefined') {
      AppSSR = (
        <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      )
    }
    return AppSSR;
  }
}
