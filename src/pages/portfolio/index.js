import React from 'react';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import ImageLink from '../../components/imageLink/imageLink';

const images = [
  { title: 'new born', imgSrc: 'logo.png', link: 'new-born' },
  { title: 'sitters', imgSrc: 'logo.png', link: 'sitters' },
  { title: 'cake smash', imgSrc: 'logo.png', link: 'cake-smash' },
  { title: 'maternity', imgSrc: 'logo.png', link: 'maternity' },
  { title: 'other', imgSrc: 'logo.png', link: 'other' },
];

const Portfolio = () => {
  return (
    <Layout
      headingText="My portfolio"
      subHeading="Click on the picture to visit specific gallery"
    >
      <SEO title="Portfolio" />
      <section className="section">
        {images.map(({ title, imgSrc, link }) => (
          <ImageLink key={title} title={title} imgSrc={imgSrc} link={link} />
        ))}
      </section>
    </Layout>
  );
};

export default Portfolio;
