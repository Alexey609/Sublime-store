import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Menu, AppRoutes } from './Components';
import { getCategories } from './redux/slices/categoriesSlice';
import { getProducts } from './redux/slices/productSlice';

function App() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="super_container">
      <Header active={active} setActive={setActive} />
      <Menu active={active} setActive={setActive} />
      <AppRoutes />
    </div>
  );
}

export default App;
