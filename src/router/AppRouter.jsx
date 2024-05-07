import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import PrivateRouter from "./PrivateRouter";
const Login = lazy(() => import('../pages/Login'));
const  Register  = lazy(() => import('../pages/Register'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Home= lazy(() => import('../pages/Home'));
const Sales  = lazy(() => import('../pages/Sales'));
const Firms = lazy(() => import('../pages/Firms'));
const Brands = lazy(() => import('../pages/Brands'));
const Products = lazy(() => import('../pages/Products'));
const Purchases  = lazy(() => import('../pages/Purchases'));




const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="sales" element={<Sales />} />
            <Route path="firms" element={<Firms />} />
            <Route path="brands" element={<Brands />} />
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
