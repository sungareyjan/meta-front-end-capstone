import './App.css';
import Home from './componets/pages/Home.jsx';
import Menu from './componets/pages/Menu.jsx';
import Service from './componets/pages/Service.jsx';
import About from './componets/pages/About.jsx';
import Footer from './componets/layouts/footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './componets/layouts/nav.jsx';
function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index element={<Home />}/>
            <Route path="menu" element={<Menu />}/>
            <Route path="services" element={<Service />}/>
            <Route path="about" element={<About />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

