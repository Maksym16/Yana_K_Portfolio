import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Project from './pages/Project'
import ScrollToTop from './components/ScrollToTop'
import ScrollButton from './components/ScrollTopBtn'
import { Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:id" element={<Project />} />
        </Route>
      </Routes>
      <ScrollButton />
    </div>
  );
}

export default App;
