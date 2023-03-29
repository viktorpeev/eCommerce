import './default.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { setCurrentUser } from './redux/User/user.actions';
import { connect } from 'react-redux';

//hoc
import WithAuth from './hoc/withAuth';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';

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
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recovery' element={<Recovery />} />
          <Route path='/dashboard' element={<WithAuth><Dashboard /></WithAuth>} /> 
          {/* MSG accessing dashboard through url return login instead of dashboard */}
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
