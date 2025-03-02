import React from "react";
import Layout from '../components/Layout.js';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
