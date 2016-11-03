import React from 'react';
import Helmet from 'react-helmet';
import Header from './header.jsx';
import Footer from './footer.jsx';

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
    <div>
      {content()}
    </div>
    <Footer />
  </div>
);

export default Layout;
