import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta property="og:title" content="Howdway" />
        <meta property="og:description" content="We Scale Your Business online" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://howdway.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page content */}
    </>
  );
}

export default Home;
