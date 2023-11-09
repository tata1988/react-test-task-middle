import React, { useEffect, useRef, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import s from './index.module.scss';
import { useDispatch } from 'react-redux';
import { getProductColor, getSizes } from '../../services/api';
import Slider from '../Slider';
import { addProductCart } from '../../store/cart/slice';

const Product = ({ productID, product }) => {

  const [colorID, setColorID] = useState(null);
  const [sizeID, setSizeID] = useState(null);
  const [color, setColor] = useState(null);
  const [sizes, setSizes] = useState(null);
  
  const dispatch = useDispatch();

  const errorRef = useRef(null);

  useEffect(() => {
    if (product) {
      setColorID(product.colors[0].id)
    }
  }, [product]);


  useEffect(() => {
    if (color) {
      setSizeID(color.sizes[0]);
      errorRef.current.style.display = 'none';
    }
  }, [color]);

  useEffect(() => {
    if (product) {
      getProductColor(productID, colorID)
      .then(res => setColor(res))
      .catch((error) => console.error(error));
    }

  }, [productID, colorID]);


  useEffect(() => {
    getSizes()
      .then(res => setSizes(res))
      .catch((error) => console.error(error));
  }, [color]);

  const handleAddProductCart = () => {

    const id = uuidv4();
    
    if (sizeID === undefined) {
      errorRef.current.style.display = 'block';
    } else {
      errorRef.current.style.display = 'none';

      let item = {
        id: id,
        sizeID: sizeID,
        color: color,
        name: product?.name,
      }
      dispatch(addProductCart(item));
    }
  }

  return (
    <div className={s.productWrapper}>
      <Slider slider={color?.images} sliderWidth="250" />

      <div className={s.wrapper}>
        <div className={s.name}>{product?.name}</div>
        <div>Цена: {color?.price} руб</div>
        <div>{color?.description}</div>

        <div>
          <span>Цвет: </span>
          <select onChange={(e) => setColorID(e.target.value)}>
            {product ? product.colors.map((item) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              )
            }) : null
            }
          </select>
        </div>
        
        <div>
          <span>Размер: </span>
          <select onChange={(e) => {setSizeID(e.target.value)}}>
            {color ? color.sizes.map((id, i) => {
              const colorNew = sizes.find((item) => item.id == id)
              return (
                <option key={i} value={colorNew.id}>{colorNew.label}</option>
              )

            }) : null
            }
          </select>
          <div ref={errorRef} className={s.error}>Выберите размер</div>
        </div>

        <button className={s.addCard} onClick={handleAddProductCart}>
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

export default Product;