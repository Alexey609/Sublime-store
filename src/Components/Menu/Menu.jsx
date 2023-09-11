import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../redux/slices/userSlice';

export const Menu = ({ active, setActive }) => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <div
      className={
        active ? 'menu menu_mm trans_300 active' : 'menu menu_mm trans_300'
      }
    >
      <div className="menu_container menu_mm">
        <div className="page_menu_content">
          <ul className="page_menu_nav menu_mm">
            <li className="page_menu_item menu_mm">
              <Link to="/">
                Home<i className="fa fa-angle-down"></i>
              </Link>
            </li>
            <li className="page_menu_item menu_mm">
              <Link to="/categories">
                Categories<i className="fa fa-angle-down"></i>
              </Link>
            </li>
            <li className="page_menu_item menu_mm">
              {isAuth ? (
                <button onClick={logOut} className="logout__button--mob">
                  Log out
                </button>
              ) : (
                <Link to="/signIn">
                  SignIn/SignUp<i className="fa fa-angle-down"></i>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="menu_close" onClick={() => setActive(false)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>

      <div className="menu_social">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
