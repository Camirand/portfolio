import RootLayout from "../layouts/RootLayout";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
