import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './pages/Main';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound';
import Carts from './pages/Carts';

import GlobalStyle from './GlobalStyle';

import PATH from './constants/path';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={`${PATH.ROOT}`} element={<Main />} />
          <Route path={`${PATH.ORDERS}`} element={<Orders />} />
          <Route path={`${PATH.CARTS}`} element={<Carts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;