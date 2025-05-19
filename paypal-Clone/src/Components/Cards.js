import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './code.css'; // Import your custom CSS file

function GridExample() {
  return (
    <div className="cardsFullBlock">

      <div className="cardMainText">
        <h2 id="th">
        Find more ways to shop
       
        </h2>
        <h2 id="th"> with PayPal for you.</h2>
      </div>

      <div className="cardsblock">
        <div className="cards">
          
          <Card style={{ width: '22rem' }} >
            <Card.Img variant="top" src="https://www.paypalobjects.com/marketing/web23/in/home/shopping-mall-m3-1.jpg" className="cardImage"/>
            <Card.Body>
              <Card.Title  className="cardtitle">The world is
              your shopping mall.</Card.Title>
              <Card.Text>
              From big brands to little boutiques,
               you can shop safely at over millions of online stores with PayPal.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className="cards">
            
          <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://www.paypalobjects.com/marketing/web23/in/home/preferred-card-m3-2.jpg" className="cardImage"/>
              <Card.Body>
                <Card.Title className="cardtitle">Pay with your
                preferred card.</Card.Title>
                <Card.Text>
                  Link all your cards and choose which one to use at checkout.
                  Shopping online has never been this easy.
                  You can also keep earning rewards from your favourite cards.¹
                </Card.Text>
                <Button variant="primary">Link a Card</Button>
              </Card.Body>
            </Card>
        </div>
        <div className="cards">   
          <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://www.paypalobjects.com/marketing/web23/in/home/online-confidence-m3-3.jpg" className="cardImage" />
              <Card.Body>
                <Card.Title  className="cardtitle">Shop online
                with confidence.</Card.Title>
                <Card.Text>
                  Shop online with confidence –
                  with 24/7 fraud monitoring and Buyer Protection² on eligible purchases. 
                  Terms and limitations apply.
                </Card.Text>
                <Button variant="primary">Find Out More</Button>
              </Card.Body>
            </Card>
        </div>

      </div>
      
    </div>
  );
}

export default GridExample;