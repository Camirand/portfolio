import RootLayout from "../layouts/RootLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
