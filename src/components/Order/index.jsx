import style from './index.module.scss'
import { useDispatch } from 'react-redux';

import { removeProductCart } from '../../store/cart/slice';
import { getSize } from '../../services/api';
import { useEffect, useState } from 'react';


const Order = ({ id, img, name, price, color, sizeId }) => {

    const dispatch = useDispatch();
    const [size, setSize] = useState(null);

    useEffect(() => {
        getSize(sizeId)
            .then(res => setSize(res))
            .catch((error) => console.error(error));
    }, [sizeId]);


    const handleRemoveProduct = (e) => {
        e.preventDefault();
        dispatch(removeProductCart(id))
    }

    return (
        <div className={style.order}>
            <img src={img} alt="img" className={style.img} />
            <div className={style.name}>{name}</div>
            <div>Цвет: {color}</div>
            <div> Размер: {size?.label}</div>
            <div>Цена: {price} ₽</div>
            <button onClick={handleRemoveProduct} className={style.close}>Удалить из корзины</button>
        </div>
    );
}

export default Order;
