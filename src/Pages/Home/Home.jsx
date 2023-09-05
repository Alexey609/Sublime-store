import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterByPrice } from '../../redux/slices/productSlice';

import { Slider, Products } from '../../Components';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const {
    products: { list },
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return isAuth ? (
    <>
      <div className="home">
        <Slider />
      </div>
      <Products products={list} amount={8} />
    </>
  ) : (
    navigate('/signIn')
  );
};
