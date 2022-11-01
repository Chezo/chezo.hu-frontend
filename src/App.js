import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CV from './hu.chezo.cv/CV';
import Blog from './hu.chezo.blog/Blog';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CV />} />
          <Route path="cv" element={<CV />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}



export default App;
