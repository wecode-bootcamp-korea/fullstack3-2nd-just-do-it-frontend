import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Top from './components/Top';
import TopNav from './components/TopNav';
import Detail from './pages/Detail/Detail';
import SNKRSDetail from './pages/SNKRSDetail/SNKRSDetail';
import SnkrsList from './pages/SNKRS/SnkrsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/snkrsdetail" element={<SNKRSDetail />} />
        {/* <Route path="/" element={<Top />} /> */}
        <Route path="/" element={<TopNav />} />
        {/* <Route path="/" element={<Footer />} /> */}
        <Route path="/snkrs" element={<SnkrsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
