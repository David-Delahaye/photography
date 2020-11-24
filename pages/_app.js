import "../styles/globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div className="page">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
