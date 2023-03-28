import './default.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';

// utils
import { auth, handleUserProfile } from './firebase/utilis';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const authListener = useRef(null);

  useEffect(() => {
    authListener.current = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({id:snapshot.id, ...snapshot.data()});
        });
      }
      setCurrentUser(currentUser);
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
          <Route path='/registration' element={currentUser ? <Navigate to='/'/> : <Registration currentUser={currentUser} />} />
          <Route path='/login' element={currentUser ? <Navigate to='/'/> : <Login currentUser={currentUser} />} />
          <Route path='/recovery' element={<Recovery/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
