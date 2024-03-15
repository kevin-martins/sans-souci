import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../pages/Home';
import PictureGallery from '../pages/PictureGallery';
import Error404 from '../pages/Error404';
import { HelmetProvider } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';

export const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <HelmetProvider>
      <main className='text-slate-100 bg-gradient-to-t from-slate-900 to-slate-950'>
          <BrowserRouter>
            <NavBar />
            <div className='min-h-screen'>
              <div className='container overflow-x-hidden mx-auto'>
                <div className="fixed right-0 top-px w-1 h-screen bg-slate-700 origin-top" />
                <motion.div className="fixed right-0 top-px w-1 h-screen bg-slate-200 origin-top" style={{ scaleY }} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="galerie-photo" element={<PictureGallery />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </main>
    </HelmetProvider>
  );
}

export default App;
