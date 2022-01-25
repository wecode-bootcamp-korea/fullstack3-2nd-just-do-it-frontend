import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import SignUp from './pages/Login/SignUp';
import SnkrsList from './pages/SNKRSList/SnkrsList';
import SNKRSDetail from './pages/SNKRSDetail/SNKRSDetail';
import Auth from './pages/Login/Auth';
import Top from './components/Top';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/snkrs" element={<SnkrsList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
        <Route path="/snkrsdetail" element={<SNKRSDetail />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
