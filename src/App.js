import './default.scss';
import { Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { useEffect, useRef, useState } from 'react';
import { auth } from './firebase/utilis';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const authListener = useRef(null);

  useEffect(() => {
    authListener.current = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        setCurrentUser(currentUser);
      }

      setCurrentUser(userAuth);
    });

    return () =>{
      authListener.current();
    }
  }, [currentUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Homepage currentUser={currentUser} />} />
          <Route path='/registration' element={<Registration currentUser={currentUser} />} />
          <Route path='/login' element={<Login currentUser={currentUser} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
