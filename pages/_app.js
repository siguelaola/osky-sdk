import "@/styles/globals.css"; // replace with your styles folder name
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link href="https://fonts.cdnfonts.com/css/object-sans" rel="stylesheet" />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
