import React, { useState } from 'react';

const GallerySectionComponent = () => {
  const [filter, setFilter] = useState('all');

  const filterGallery = (filterValue) => {
    setFilter(filterValue);
  };

  // Sample gallery items data
  const galleryItems = [
    { name: 'Hello Kitty', category: 'hellokitty', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987RA0-11-9-HK-FOTM-1500x2000-xs.png?c=00' },
    { name: 'My Melody', category: 'mymelody', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987c62-010523-MyMelodyJAN_Social-KC-MushroomB-1500x2000-xs.png?c=00' },
    { name: 'Keroppi', category: 'keroppi', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987VmG-6-26-KR-WALLPAPERS-Summer-1500x2000-xs.png?c=00' },
    { name: 'Pompompurin', category: 'pompompurin', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987xNc-3-31-PN-B-1500x2000-s.png?c=00' },
    { name: 'Badtz-Maru', category: 'badtzmaru', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987I6l-6-1-XO-WALLPAPER-1500x2000-C-xs.png?c=00' },
    { name: 'Cinnamoroll', category: 'cinnamoroll', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987cbD-2-28-CN-WALLPAPER-Cafe-Pink-1500x2000-xs.png?c=00' },
    { name: 'Chococat', category: 'chococat', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987uNe-8-29-CO-Wallpaper-FOTM-1500x2000-rev-xs.png?c=00' },
    { name: 'Kuromi', category: 'kuromi', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987et1-9-26-KU-WALLPAPER-Halloween-1500x2000-B-xs.png?c=00' },
    { name: 'Little Twin Stars', category: 'littletwinstars', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987mV9-11-29-LTS-1500x2000-A-xs.png?c=00' },
    { name: 'Pochacco', category: 'pochacco', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987T64-2-5-PC-WALLPAPER-1500x2000-B-xs.png?c=00' },
    { name: 'Tuxedosam', category: 'tuxedosam', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987WQm-8-2-TX-Wallpaper-1500x2000-A-xs.png?c=00' },
    { name: 'Aggretsuko', category: 'aggretsuko', imgUrl: 'https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987qx1-9-5-AR-WALLPAPER-3-xs.png?c=00' },
  ];

  return (
    <section id="gallery-section">
      <h2>VIEW ALL CHARACTER GOODIES</h2>
      <div className="filter-options">
        <span>Filter By:</span>
        <button onClick={() => filterGallery('all')} className={filter === 'all' ? 'active' : ''}>View All Characters</button>
        <button onClick={() => filterGallery('hellokitty')} className={filter === 'hellokitty' ? 'active' : ''}>Hello Kitty</button>
        <button onClick={() => filterGallery('mymelody')} className={filter === 'mymelody' ? 'active' : ''}>My Melody</button>
        <button onClick={() => filterGallery('keroppi')} className={filter === 'keroppi' ? 'active' : ''}>Keroppi</button>
        <button onClick={() => filterGallery('pompompurin')} className={filter === 'pompompurin' ? 'active' : ''}>Pompompurin</button>
        <button onClick={() => filterGallery('badtzmaru')} className={filter === 'badtzmaru' ? 'active' : ''}>Badtz-Maru</button>
        <button onClick={() => filterGallery('cinnamoroll')} className={filter === 'cinnamoroll' ? 'active' : ''}>Cinnamoroll</button>
        <button onClick={() => filterGallery('chococat')} className={filter === 'chococat' ? 'active' : ''}>Chococat</button>
        <button onClick={() => filterGallery('kuromi')} className={filter === 'kuromi' ? 'active' : ''}>Kuromi</button>
        <button onClick={() => filterGallery('littletwinstars')} className={filter === 'littletwinstars' ? 'active' : ''}>Little Twin Stars</button>
        <button onClick={() => filterGallery('pochacco')} className={filter === 'pochacco' ? 'active' : ''}>Pochacco</button>
        <button onClick={() => filterGallery('tuxedosam')} className={filter === 'tuxedosam' ? 'active' : ''}>Tuxedosam</button>
        <button onClick={() => filterGallery('aggretsuko')} className={filter === 'aggretsuko' ? 'active' : ''}>Aggretsuko</button>
      </div>
      <div className="gallery">
        {galleryItems
          .filter(item => filter === 'all' || item.category === filter)
          .map((item, index) => (
            <div key={index} className={`gallery-item ${item.category}`}>
              <img src={item.imgUrl} alt={item.name} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default GallerySectionComponent;