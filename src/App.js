import './default.scss';
import { Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
