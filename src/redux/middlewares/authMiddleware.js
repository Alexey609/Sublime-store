import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { removeUser, setUser, addItemToCart } from '../slices/userSlice';

export const authMiddleware = createListenerMiddleware();
authMiddleware.startListening({
  matcher: isAnyOf(setUser, removeUser, addItemToCart),
  effect: (action, listenerApi) =>
    localStorage.setItem('user', JSON.stringify(listenerApi.getState().user)),
});
