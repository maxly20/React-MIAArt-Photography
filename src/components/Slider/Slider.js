import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide_one from '../../images/home/01.jpg';
import slide_two from '../../images/home/02.jpg';
import slide_three from '../../images/home/03.jpg';
import slide_four from '../../images/home/04.jpg';
import slide_five from '../../images/home/05.jpg';
import slide_six from '../../images/home/06.jpg';
import slide_seven from '../../images/home/07.jpg';
import slide_eight from '../../images/home/08.jpg';

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
  };

  return (
    <div
      className='carrousel_wrapper'
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_six})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_seven})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${slide_eight})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
