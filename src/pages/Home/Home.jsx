import React, { useEffect } from 'react';
import PageTemplate from '../../components/common/PageTemplate/PageTemplate';
import ProductList from '../../components/product/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductListAsync } from '../../store/actions/product';
import Pagination from '../../components/common/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';

export default function Home() {
  const dispatch = useDispatch();
  const { productList, isLoading, pageCount } = useSelector(state => state);

  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') ?? 1;

  useEffect(() => {
    dispatch(fetchProductListAsync(currentPage));
  }, [currentPage]);

  return (
    <PageTemplate>
      {currentPage > pageCount && <ErrorMessage>😱 존재하지 상품 페이지입니다. 😱</ErrorMessage>}

      {isLoading ? (
        <ProductList.skeleton />
      ) : (
        <>
          <ProductList productList={productList} />
          <Pagination />
        </>
      )}
    </PageTemplate>
  );
}
