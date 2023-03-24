import Header from './components/Header';
import './default.scss';

// layouts


// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
