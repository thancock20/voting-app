import React from 'react';
import Helmet from 'react-helmet';
import Header from '../containers/header.js';
import Footer from './footer.jsx';
import Normalize from 'normalize.jss';
import Load from 'shingon-load-jss';

Load(Normalize, 'global');

const Layout = ({content = () => null }) => (
  <div>
    <Helmet
      defaultTitle="voting-app"
      titleTemplate="voting-app | %s"
      meta={[
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]}
    />
    <Header />
    <div style={{maxWidth: 800, margin: 'auto'}}>
      {content()}
    </div>
    <Footer />
  </div>
);

export default Layout;
