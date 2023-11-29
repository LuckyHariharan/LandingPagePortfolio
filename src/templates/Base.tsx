import { useAnimation } from 'framer-motion';
import { useLayoutEffect } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const controls = useAnimation();

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const animatePage = async () => {
      await controls.start({ opacity: 1, scale: 1 });
      scrollToTop();
    };

    animatePage();
  }, [controls]);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Hero />

      <VerticalFeatures />
      <Banner />

      <Footer />
    </div>
  );
};

export { Base };
