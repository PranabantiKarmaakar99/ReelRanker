
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "../src/component/navbar";
import Auth from './pages/auth';
import Home from './pages/home';
import {Rated} from './pages/rated';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';




function App() {
 

  return (
 
    <Router>
      <div >
       <Navbar />
      <Routes>

     

        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/Rated_Page" element={<Rated />} />
        <Route path="/Movies/:id" element={<Movies />} />
        <Route path="/TVShows/:id" element={<TVShows />} />





  </Routes>
  </div>

  </Router>
  )

    

}

export default App
