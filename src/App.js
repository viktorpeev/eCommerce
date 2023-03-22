import Header from './components/Header';
import './default.scss';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
