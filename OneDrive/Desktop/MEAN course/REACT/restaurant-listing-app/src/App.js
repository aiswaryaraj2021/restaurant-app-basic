import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Resturantslist from './components/Resturantslist';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Viewrestrnt from './components/Viewrestrnt'
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header/>
          </header>
         <Routes>
          <Route path='/' element={<Resturantslist/>}/>
          <Route path='Viewrestrnt/:id' element={<Viewrestrnt/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
