import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => {
  const url = 'https://www.carmelindaaraujo.com/';
  const title = 'Carmelinda Araújo | Mentora, Terapeuta e Psicopedagoga';
  const description =
    'Mentora Terapeuta e Psicopedagoga Carmelinda Araújo - Curso de Barras de Access em Braga';
  const image = `${url}/logo.webp`;

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta itemProp="name" content={title} />
      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta name="image" content={image} />
      <meta itemProp="image" content={image} />

      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={image} />
    </NextHead>
  );
};

export default Head;
