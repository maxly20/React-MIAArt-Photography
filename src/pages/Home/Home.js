import './Home.scss';
import Slider2 from '../../components/Slider/Slider2';
// Image
import slide_one from '../../images/home/01.jpg';
import slide_two from '../../images/home/02.jpg';
import slide_three from '../../images/home/03.jpg';
import slide_four from '../../images/home/04.jpg';
import slide_five from '../../images/home/05.jpg';
import slide_six from '../../images/home/06.jpg';
import slide_seven from '../../images/home/07.jpg';
import slide_eight from '../../images/home/08.jpg';

const Home = () => {
  const homeImages = [
    slide_one,
    slide_two,
    slide_three,
    slide_four,
    slide_five,
    slide_six,
    slide_seven,
    slide_eight,
  ];
  return (
    <div className='featured_container'>
      <Slider2 images={homeImages} />
    </div>
  );
};

export default Home;
