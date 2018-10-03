import React from 'react';
import App, { Container } from 'next/app';
import { LangContext } from '../context';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props) {
    super(props);

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      lang: 'pl',
      changeLang: lang => this.setState({ lang })
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <LangContext.Provider value={this.state}>
          <Component {...pageProps} />
        </LangContext.Provider>
      </Container>
    );
  }
}
