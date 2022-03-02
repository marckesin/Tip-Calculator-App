import "../styles/globals.css";

// Default App component to initialize pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
