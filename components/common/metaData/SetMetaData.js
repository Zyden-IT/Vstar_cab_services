import Head from "next/head";

const SetMetaData = ({ title, description, keyword, canonicalUrl, noIndex, ogImage }) => {
  return (
    <Head>
      <title>{title ? title : "House of Fashion"}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
  );
};


export default SetMetaData;