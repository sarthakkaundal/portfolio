import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Sarthak Kaundal | MERN Developer & Problem Solver</title>
      <meta name="description" content="Portfolio of Sarthak Kaundal, a MERN stack developer turning complex problems into scalable web solutions." />
      <meta name="keywords" content="Sarthak Kaundal, MERN Developer, Full Stack, Software Engineer, Portfolio, React, Node.js" />
      
      {/* OpenGraph tags for LinkedIn/Facebook */}
      <meta property="og:title" content="Sarthak Kaundal | MERN Developer" />
      <meta property="og:description" content="Portfolio of Sarthak Kaundal, a MERN stack developer turning complex problems into scalable web solutions." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sarthakkaundal.com" />
      <meta property="og:image" content="https://sarthakkaundal.com/og-image.jpg" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sarthak Kaundal | MERN Developer" />
      <meta name="twitter:description" content="Portfolio of Sarthak Kaundal, a MERN stack developer turning complex problems into scalable web solutions." />
      <meta name="twitter:image" content="https://sarthakkaundal.com/og-image.jpg" />
    </Helmet>
  );
};

export default SEO;
