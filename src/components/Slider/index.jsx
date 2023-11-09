import React, { useState } from 'react'
import s from './index.module.scss'


const Slider = ({slider, sliderWidth, sliderHeight}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [left, setLeft] = useState(0);

  const prevSlide = () => {
    setActiveIndex(activeIndex - 1);
    setLeft(left + 250);

    if (activeIndex === 1) {
      setActiveIndex(activeIndex + slider.length - 1);
      setLeft(left - sliderWidth * (slider.length - 1));
    }
  };
  
  const nextSlide = () => {
    setActiveIndex(activeIndex + 1);
    setLeft(left - sliderWidth);

    if (activeIndex === slider.length) {
      setActiveIndex(activeIndex - (slider.length + 1));
      setLeft(0);
    }
  };

  const style = {
    left: left,
    width: sliderWidth,
    height: sliderHeight
  };
  
return (
  <>
    <div className={s.sliderWrapper}>
      <ul className={s.slider}>
        {slider ? slider.map((item,index) => {
          return (
            <li key={index} style={style}
            className={index+1 === activeIndex ? s.sliderItem : s.hide}
            >
              <img className={s.img} src={item} alt="foto" />
            </li>
          )
        }) : '..loading'
    }
      </ul>
      <div className={s.buttonsWrapper}>
        <button className={s.prevButton} onClick={prevSlide}></button>
        <button className={s.nextButton} onClick={nextSlide}></button>
      </div>
    </div>

  </>
);
}

export default Slider;