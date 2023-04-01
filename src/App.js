import './default.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { checkUserSession } from './redux/User/user.actions';

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
import { useDispatch } from 'react-redux';


const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(checkUserSession());

  }, [dispatch]);

  return (
    <div className="App">
      <Header />
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

export default App;
