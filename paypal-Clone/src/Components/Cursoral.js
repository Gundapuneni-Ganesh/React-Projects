import Carousel from 'react-bootstrap/Carousel';
import './code.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';

function DarkVariantExample() {
  const navigate = useNavigate();
  const slides = [
    {
      imgSrc: "https://www.shutterstock.com/image-photo/chiang-mai-thailand-may012019-man-260nw-1418057201.jpg",
      label: "Sell just about ",
      label2:"  anywhere in the world..",
      description: "Whether you have an online shop or need to accept payments remotely, ",
      description2:"we can help you get paid fast."
    },
    {
      imgSrc: "https://www.shutterstock.com/image-photo/chiang-mai-thailand-may012019-man-260nw-1418057201.jpg",
      label: "Secure payments.",
      label2:" Smooth shopping.",
      description: "More ways to pay and more places to shop.",
      description2:" Send money quickly and easily around the globe."
    }
  ];

  return (
    <Carousel data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-item-container">
            <img
              className="d-block w-100"
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <div className="caption">
              <h1 className="slide-label">{slide.label}</h1>
              <h1 className="slide-label">{slide.label2}</h1>
              <p className="slide-description">{slide.description}</p>
              <p className="slide-description">{slide.description2}</p>
              <div className="button-container">
                <button className="btn btn-dark" id="bt"  onClick={() => navigate('/Login')}>Sign Up</button>
                <button className="btn btn-transparent" id="tb">Connect with Us</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantExample;