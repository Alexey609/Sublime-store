import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/api/apiSlice';
import { Products } from '../index';

export const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: '',
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };

  const [isEnd, setEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === id * 1);

    setCat(category);
  }, [list, id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setEnd(false);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="categories__container">
              <h2 className="categoryName">{cat?.name}</h2>
              <form className="categories__form" onSubmit={handleSubmit}>
                <div className="input__container">
                  <input
                    type="text"
                    name="title"
                    className="category__input"
                    placeholder="Product name"
                    value={values.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="input__container">
                  <input
                    type="number"
                    name="price_min"
                    className="category__input"
                    placeholder="0"
                    value={values.price_min}
                    onChange={handleChange}
                  />
                </div>
                <div className="input__container">
                  <input
                    type="number"
                    name="price_max"
                    className="category__input"
                    placeholder="0"
                    value={values.price_max}
                    onChange={handleChange}
                  />
                </div>
                <div className="category__button--search">
                  <button type="submit" className="categories__search">
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/*load products*/}
            {isLoading ? (
              <div className="preloader">Loading...</div>
            ) : !isSuccess || !items.length ? (
              <div className="">
                <span>No results</span>
                <button className="noRes__button" onClick={handleReset}>
                  Reset
                </button>
              </div>
            ) : (
              <Products
                title=""
                products={items}
                style={{ padding: 0 }}
                amount={items.length}
              />
            )}

            {!isEnd && (
              <div className="button__container-categories">
                <button
                  className="button__category--more"
                  onClick={() =>
                    setParams({
                      ...params,
                      offset: params.offset + params.limit,
                    })
                  }
                >
                  See more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
