import React from 'react';
import Form from './form';
import Navigation from './nav';
import InteractiveSection from './zodiacGame';
import GallerySection from './Gallery';
import Footer from './footer';

const File = () => {
  const filterGallery = (filterValue) => {
    console.log('Filtering gallery by:', filterValue);
  };

  return (
    <>
      <Navigation />
      <Form />
      <InteractiveSection />
      <GallerySection filterGallery={filterGallery} />
      <Footer />
    </>
  );
};

export default File;
