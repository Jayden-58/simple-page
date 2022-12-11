import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='education' element={<EducationPage />}/>
      </Routes>
    </div>
  );
}

export default App;
