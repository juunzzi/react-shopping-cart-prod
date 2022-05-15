import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridWrapper from "../../components/GridWrapper";
import Items from "../../components/Items";
import { getProductsByPage } from "../../modules/products";
import throttle from "../../utils/throttle";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import { DELAY_TIME } from "../../constants/constants";
import AxiosError from "../AxiosError";

const ItemList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const sectionRef = useRef(null);
  const delayGetProduct = throttle(DELAY_TIME, () =>
    dispatch(getProductsByPage())
  );

  useInfinityScroll(sectionRef, delayGetProduct, products.isEnd);

  if (products.error) return <AxiosError />;

  return (
    <section>
      <GridWrapper>
        <Items />
      </GridWrapper>
      <div ref={sectionRef}></div>
    </section>
  );
};

export default ItemList;
