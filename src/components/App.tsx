import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import ShoppingCart from '@/pages/ShoppingCart/ShoppingCart';
import Home from '@/pages/Home/Home';
import OrderList from '@/pages/OrderList/OrderList';
import { ROUTE } from '@/route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.Home} element={<Home />} />
        <Route path={ROUTE.ShoppingCart} element={<ShoppingCart />} />
        <Route path={ROUTE.OrderList} element={<OrderList />} />
        <Route path={ROUTE.ProductDetail} element={<ProductDetail />} />
        <Route path={ROUTE.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
