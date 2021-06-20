import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Slider.scss';

import slide_one from '../../images/home/01.jpg';
import slide_two from '../../images/home/02.jpg';
import slide_three from '../../images/home/03.jpg';
import slide_four from '../../images/home/04.jpg';
import slide_five from '../../images/home/05.jpg';
import slide_six from '../../images/home/06.jpg';
import slide_seven from '../../images/home/07.jpg';
import slide_eight from '../../images/home/08.jpg';

const Slider = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={600}
      showThumbs={false}
    >
      <div>
        <img className='slider_img' src={slide_one} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_two} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_three} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_four} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_five} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_six} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_seven} alt='slider_img' />
      </div>
      <div>
        <img className='slider_img' src={slide_eight} alt='slider_img' />
      </div>
    </Carousel>
  );
};

export default Slider;
