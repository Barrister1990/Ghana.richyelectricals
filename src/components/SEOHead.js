// components/SEOHead.js
import Head from 'next/head';

export default function SEOHead({ 
  title = "Electrical Services in Ghana | Richyelectricals GH",
  description = "Professional electrical, generator, solar and EV charging services across Ghana. Certified electricians for all your electrical needs.",
  canonicalUrl,
  pageType = "website" 
}) {
  const fullUrl = canonicalUrl || "https://www.richyelectricals.com.gh";
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Richyelectricals GH" />
      <meta property="og:image" content="https://www.richyelectricals.com.gh/og-image.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
<meta name="theme-color" content="#4CAF50" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.richyelectricals.com.gh/twitter-image.jpg" />
    </Head>
  );
}