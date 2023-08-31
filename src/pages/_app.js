import RootLayout from "../layouts/RootLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <Footer />
    </>
  );
}

export default MyApp;
