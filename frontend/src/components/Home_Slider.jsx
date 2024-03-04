import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import img1 from '../assets/Home images/Slide-light.png';
import img2 from '../assets/Home images/img2.png';
import img3 from '../assets/Home images/img3.png';
import img4 from '../assets/Home images/img4.png';
import Service from './ServiceSection';


// Mocked product data
const mockedProducts = [
  {
    _id: 1,
    name: 'Switch on the light of possibility, let the fan of innovation breeze through, wired with determination to illuminate the path ahead', 
    image: img1
  },
  {
    _id: 2,
    name: 'A broken heater motor is a chilly reminder that even the best-laid plans can fail.', 
    image: img2
  },
  {
    _id: 3,
    name: 'Hand a paintbrush, creativity ignites. Add a ladder, aspirations take flight.', 
    image: img3
  },
  {
    _id: 4,
    name: 'Sturdy stones and solid sheets pave the path to stability.', 
    image: img4
  },
  // Add more mocked product data if needed
];

const Home_Slider = () => {
  // Removed API call and directly use mockedProducts
  const products = mockedProducts;

  return (
    <>
    <Carousel pause='hover'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          
            <Image src={product.image} alt={product.name} fluid className="d-block mx-auto" />
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right' style={{ fontSize: '1.5em' }}>
                {product.name} 
              </h2>
            </Carousel.Caption>
          
        </Carousel.Item>
      ))}
    </Carousel>
    <Service/>
    </>
    
  );
};

export default Home_Slider;
