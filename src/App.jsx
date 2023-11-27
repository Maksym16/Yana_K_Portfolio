import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import { Routes, Route, Outlet } from "react-router-dom";
import FinDo from './components/FinDo';
import PortlandElectric from './components/PortlandElectric';
import Evelina from './components/Evelina';
import GlowYoga from './components/GlowYoga';
import SnovIo from './components/SnovIo';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />}>
            <Route path="fin-do" element={<FinDo />} />
            <Route path="snov" element={<SnovIo />} />
            <Route path="fin-do" element={<FinDo />} />
            <Route path="glow-yoga" element={<GlowYoga />} />
            <Route path="evelina" element={<Evelina />} />
            <Route path="portland-electric" element={<PortlandElectric />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
