import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNotification } from '../features/dataSlice';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Home from '../pages/Home';
import PictureGallery from '../pages/PictureGallery';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = useSelector(state => state?.data.notifications);
  const dispatch = useDispatch();

  const onClick = () => {
    // setIsOpen(prev => !prev);
    const randomIndex = Math.floor(Math.random() * 10000);
    const notification = {
      id: randomIndex,
      icon: <></>,
      text: "notification"
    }
    dispatch(addNotification(notification));
  }

  return (
    <>
      <main className='text-slate-100 bg-gradient-to-t from-slate-900 to-slate-950'>
          <BrowserRouter>
            <NavBar />
              <div className='min-h-screen'>
                <div className='container overflow-x-hidden mx-auto'>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/galerie-photo" element={<PictureGallery />} />
                  </Routes>
                </div>
              </div>
          </BrowserRouter>
        </main>
    </>
  );
}

export default App;
