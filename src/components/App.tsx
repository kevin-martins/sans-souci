import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404';
import Contact from '../pages/contact';
import Footer from './Footer';
import NavBar from './navBar/NavBar';
import { useState } from 'react';
import Home from '../pages/Home';
import AlarmesEtDomotique from '../pages/realisations/alarmes-et-domotique';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <main className={`${darkMode && 'dark'}`}>
      <BrowserRouter>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className='bg-white dark:bg-gray-800 min-h-screen'>
            <div className='container mx-auto py-10'>
              <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="/contact" element={<><Contact /><Footer /></>} />
                <Route path="/realisations/alarmes-et-domotique" element={<AlarmesEtDomotique />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
