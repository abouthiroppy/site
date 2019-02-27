import * as React from 'react';
import ScrollReveal from 'scrollreveal';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Hero } from './Hero';
import { Profile } from './Profile';
import { GitHub } from './GitHub';
import { Material } from './Material';
import { Footer } from './Footer';
import font from '../../fonts/StratumNo1 Medium.ttf';
import { mediaQueries } from '../utils/mediaQueries';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url("https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed|Questrial");

  @font-face {
    font-family: Stratum;
    src: url('${font}');
  }

  html {
    font-family: Stratum, "Helvetica Neue For Number", "Hiragino Kaku Gothic ProN", "メイリオ", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 62.5%;

    ${mediaQueries.smartphone`
      font-size: 50.5%;
    `};
  }

  h1 {
    font-size: 3.6rem;
    margin: 32px 0;
  }

  h2 {
    font-size: 3.2rem;
    margin: 20px 0;
  }

  h3 {
    font-size: 2.4rem;
    margin: 16px 0;
  }

  h4 {
    font-size: 2.0rem;
    margin: 12px 0;
  }

  p, a {
    font-size: 2.0rem;
    font-weight: 100;
  }

  p {
    margin: 12px 0;
  }

  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
`;

export const sr = ScrollReveal();

export class App extends React.Component {
  componentDidMount() {
    const config = {
      origin: 'top',
      duration: 1000,
      delay: 300,
      scale: 1,
      easing: 'ease',
      reset: true
    };

    sr.reveal('.transition', config);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Hero />
          <Profile />
          <GitHub />
          <Material />
          <Footer />
        </Container>
      </>
    );
  }
}