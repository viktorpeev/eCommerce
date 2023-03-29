import './default.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { setCurrentUser } from './redux/User/user.actions';
import { connect } from 'react-redux';

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


const App=(props)=> {
  const { currentUser,setCurrentUser } = props;

  const authListener = useRef(null);

  useEffect(() => {
    authListener.current = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
      authListener.current();
    }
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/registration' element={currentUser ? <Navigate to='/' /> : <Registration />} />
          <Route path='/login' element={currentUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/recovery' element={<Recovery />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
