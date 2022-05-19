import PageTemplate from '../../components/common/PageTemplate/PageTemplate';
import ProductList from '../../components/product/ProductList/ProductList';
import Pagination from '../../components/common/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import ErrorContainer from '../../components/common/ErrorContainer/ErrorContainer';
import * as Styled from './Home.style';
import { fetchProductListAsync } from '@/store/product/action';
import { useThunkFetch } from '@/hooks/useFecth';
import { fetchGetCartAsync } from '@/store/cart/action';

function Home() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) ?? 1;

  const {
    isLoading: isProductLoading,
    pageCount,
    productList,
  } = useThunkFetch({
    selector: state => state.product,
    thunkAction: () => fetchProductListAsync(currentPage),
    deps: [currentPage],
  });

  const { isLoading: isCartLoading } = useThunkFetch({
    selector: state => state.cart,
    thunkAction: fetchGetCartAsync,
    deps: [],
  });

  if (isCartLoading || isProductLoading) {
    return (
      <PageTemplate>
        <Styled.Container>
          <ProductList.skeleton />
          <Pagination />
        </Styled.Container>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      <Styled.Container>
        {currentPage > pageCount ? (
          <ErrorContainer>😱 존재하지 상품 페이지입니다. 😱</ErrorContainer>
        ) : (
          <ProductList productList={productList} />
        )}
        <Pagination />
      </Styled.Container>
    </PageTemplate>
  );
}

export default Home;
