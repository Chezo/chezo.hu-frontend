import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CV from './hu.chezo.cv/CV';
import Blog from './hu.chezo.blog/Blog';
import Footer from './Footer/Footer';
import ReactRecaptcha3 from 'react-google-recaptcha3';

function App() {
  console.log('Before init');
  ReactRecaptcha3.init('6LdNcbcjAAAAALa92Ghdi5CxQDxL1a9dF0vHvwAk').then(
    (status) => {
      console.log("RECAPTCHAV3" + status);
    }
  );
  console.log('After init');
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
