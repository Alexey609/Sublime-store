import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import { Home, SignIn, SignUp, Cart } from '../../Pages';
import { SingleProduct, SingleCategory, Categories } from '../index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.SIGNING} element={<SignIn />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CATEGORIES} element={<Categories />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};
