import { useState, useEffect } from 'react';
import './Slider.scss';

// import slide_one from '../../images/home/01.jpg';
// import slide_two from '../../images/home/02.jpg';
// import slide_three from '../../images/home/03.jpg';
// import slide_four from '../../images/home/04.jpg';
// import slide_five from '../../images/home/05.jpg';
// import slide_six from '../../images/home/06.jpg';
// import slide_seven from '../../images/home/07.jpg';
// import slide_eight from '../../images/home/08.jpg';

const Slider2 = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className='section'>
      {images.map((image, indexImage) => {
        let position = 'nextSlide';
        if (indexImage === index) {
          position = 'activeSlide';
        }
        if (
          indexImage === index - 1 ||
          (index === 0 && indexImage === images.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={indexImage}>
            <img src={image} alt='slider_image' className='banner_img' />
          </article>
        );
      })}
      {/* <p className='prev' onClick={() => setIndex(index - 1)}>
          <i class='fas fa-chevron-left'></i>
        </p>
        <p className='next' onClick={() => setIndex(index + 1)}>
          <i class='fas fa-chevron-right'></i>
        </p> */}
    </div>
  );
};

export default Slider2;
