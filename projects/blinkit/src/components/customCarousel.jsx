import Carousel from 'react-bootstrap/Carousel';


function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="w-80vw" style={{height:300}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Blinkit-yellow-rounded.svg/960px-Blinkit-yellow-rounded.svg.png" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-80vw" style={{height:300}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Blinkit-yellow-rounded.svg/960px-Blinkit-yellow-rounded.svg.png" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-80vw' style={{height:300}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Blinkit-yellow-rounded.svg/960px-Blinkit-yellow-rounded.svg.png" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;