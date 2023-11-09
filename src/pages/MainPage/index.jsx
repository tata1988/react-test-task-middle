import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import s from './index.module.scss'
import Container from '../../components/Container';
import TotalProducts from '../../components/TotalProducts';
import { getProducts } from '../../services/api';

const MainPage = () => {

  const [goods, setGoods] = useState(null);

  useEffect(() => {
    getProducts()
      .then(res => setGoods(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={s.mainPage}>
      <Container>
        <header className={s.header}>
          <h1 className={s.title}>Наша продукция</h1>
          <div className={s.wrapper}>
              <TotalProducts />
          </div>
        </header>
        <main>
          <ul className={s.goodsList}>
            {goods && goods.map((item) => {
              const key = uuidv4();
              return (
                  <li key={key}>
                    <Link to={`/product/${item.id}`} className={s.link}>
                      <img className={s.image} src={item.colors[0].images[0]} alt={item.name} />
                      <h2>{item.name}</h2>
                    </Link>
                  </li>
              )
            })}
          </ul>
        </main>
      </Container>
    </div>
  )
}

export default MainPage;