import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductList, Product, Cart, NotFound } from 'pages';
import { PATH_NAME } from 'constants';
import Layout from 'components/Layout/Layout';
import ImgWrapper from 'components/ImgWrapper/ImgWrapper';
import spinner from 'assets/svg/spinner.svg';

const PageRoutes = () => {
  return (
    <Suspense fallback={<ImgWrapper src={spinner} />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={PATH_NAME.HOME} element={<ProductList />} />
            <Route path={`${PATH_NAME.PRODUCT}/:id`} element={<Product />} />
            <Route path={PATH_NAME.CART} element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PageRoutes;
