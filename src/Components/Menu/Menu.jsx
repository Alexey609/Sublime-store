import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = ({ active, setActive }) => {
  return (
    <div
      className={
        active ? 'menu menu_mm trans_300 active' : 'menu menu_mm trans_300'
      }
    >
      <div className="menu_container menu_mm">
        <div className="page_menu_content">
          <div className="page_menu_search menu_mm">
            <form>
              <input
                type="search"
                required="required"
                className="page_menu_search_input menu_mm"
                placeholder="Search for products..."
              />
            </form>
          </div>
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
              <Link to="/signIn">
                SignIn/SignUp<i className="fa fa-angle-down"></i>
              </Link>
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
