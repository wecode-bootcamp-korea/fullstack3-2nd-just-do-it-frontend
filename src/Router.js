import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Top from './components/Top';
import TopNav from './components/TopNav';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import SignUp from './pages/Login/SignUp';
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
