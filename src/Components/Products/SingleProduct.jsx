import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '../../redux/api/apiSlice';
import { getRelatedProducts } from '../../redux/slices/productSlice';
import { Product, Products } from '../index';

export const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { list, related } = useSelector(({ products }) => products);

  const { data } = useGetProductQuery({
    id,
  });

  // useEffect(() => {
  //   if (!isFetching && !isLoading && !isSuccess) {
  //     navigate(ROUTES.HOME);
  //   }
  // }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return !data ? (
    <section>...Loading</section>
  ) : (
    <>
      <Product {...data} />
      <Products product={related} amount={8} />
    </>
  );
};
