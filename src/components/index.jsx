import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE } from '../route';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.home.route} element={<div>home</div>} />
          <Route path={ROUTE.shoppingCart.route} element={<div>shopping cart</div>} />
          <Route path={ROUTE.orderList.route} element={<div>order list</div>} />
          <Route path={ROUTE.productDetail.route} element={<div>product detail</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;