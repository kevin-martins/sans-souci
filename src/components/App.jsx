import React, { useState } from 'react';
import MovingCard from './MovingCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './Modal';
import Notification from '../features/notification/Notification';
import { useDispatch } from 'react-redux';
import { addNotification } from '../features/dataSlice';
import { useSelector } from 'react-redux';
import Button from './Button';
import Dropdown from './Dropdown';
import NavBar from './NavBar';
import Home from '../pages/Home';

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
                <div className='container mx-auto py-10'>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              </div>
          </BrowserRouter>
          {/* <div className='h-screen'>
            <Dropdown />
            <Button text='connexion' onClick={onClick} />
          </div>
          <div className="grid w-full place-content-center">
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
          <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
            <AnimatePresence>
              {notifications.map(notification => (
                <Notification key={notification.id} {...notification} />
              ))}
            </AnimatePresence>
          </div> */}
        </main>
    </>
  );
}

export default App;
