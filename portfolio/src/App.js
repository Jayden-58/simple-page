import {Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import GamesPage from './pages/GamesPage';
import WebsitesPage from './pages/WebsitesPage';

function App() {
  const location = useLocation();
  const basePath = location.pathname.split('/')[1];

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path={`/${basePath}`} element={<HomePage />}/> */}
        <Route path={`/`} element={<HomePage />}/>
        <Route path={`/education`} element={<EducationPage />}/>
        <Route path={`/games`} element={<GamesPage />}/>
        <Route path={`/websites`} element={<WebsitesPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//to deploy to gh pages use 'npm run deploy'
