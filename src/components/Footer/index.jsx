
import style from './index.module.scss'
import { useSelector } from 'react-redux';

const Footer = () => {

    const sum = useSelector(state => state.cart.pricesProducts);

    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.total}>
                    <div className={style.text}>Заказ на сумму:</div>
                    <div className={style.sum}>{sum} ₽</div>
                </div>
                <button className={style.btn}>Оформить заказ</button>
            </div>
        </footer>

    );
}


export default Footer;