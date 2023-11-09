import React, { useEffect, useState } from 'react'
import s from './index.module.scss'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/api';
import Product from '../../components/Product';
import Container from '../../components/Container';
import TotalProducts from '../../components/TotalProducts';
import GoBack from '../../components/GoBack';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={s.productPage}>
      <Container>
        <header className={s.header}>
          <div className={s.wrapper}>
            <GoBack />
            <h1 className={s.title}>Карточка товара</h1>
            <TotalProducts />
          </div>
        </header>

        <main className={s.main}>
          <Product product={product} productID={id} />
        </main>
      </Container>
    </div>
  )
}

export default ProductPage;