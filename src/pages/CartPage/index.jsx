import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import s from './index.module.scss'
import GoBack from '../../components/GoBack';
import Order from '../../components/Order';
import Footer from '../../components/Footer';

const CartPage = () => {
  
  const basket = useSelector(state => state.cart.basket)
  return (
    <div className={s.basket}>
      <Container>
        <div className={s.basketWrapper}>
        <header className={s.header}>
          <GoBack />
          <h1 className={s.title}>Корзина с выбранными товарами</h1>
        </header>

        <div className={s.wrapper}>
          {basket.map((item) => {

               return (
              <Order
                id={item.id}
                key={item.id}
                img={item.color.images[0]}
                name={item.name}
                color={item.color.name}
                price={item.color.price}
                sizeId={item.sizeID}
              />
            )
          })}

        </div>
        <Footer />
        </div>
      </Container>
    </div>
  );
}

export default CartPage;