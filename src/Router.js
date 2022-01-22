import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import SNKRSDetail from './pages/SNKRSDetail/SNKRSDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/snkrsdetail" element={<SNKRSDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
