import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/ProductDetail/ProductDetail';
import List from './pages/List/List';
import SignUp from './pages/Login/SignUp';
import SnkrsList from './pages/SNKRSList/SnkrsList';
import SNKRSDetail from './pages/SNKRSDetail/SNKRSDetail';
import Auth from './pages/Users/Auth';
import NewAuth from './pages/Users/NewAuth';
import Login from './pages/Users/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/detail/:styleCode" element={<Detail />} />
        <Route path="/snkrs" element={<SnkrsList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
        <Route path="/snkrs/detail/:styleCode" element={<SNKRSDetail />} />
        {/* <Route path="/oauth" element={<Auth />} /> */}
        <Route path="/oauth" element={<NewAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
