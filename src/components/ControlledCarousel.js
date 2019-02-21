import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="#"
              alt="First slide"
              height="200"
              width="600"
            />
            <Carousel.Caption>
                <h1>Choose your music</h1>
                <p>The world is full of music; why should you have to listen to music that someone else choose?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
              height="200"
              width="600"
            />
  
            <Carousel.Caption>
                <h1>Unlimited, streaming, ad-free</h1>
                <p>No arbitray limits. No distractions.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
              height="200"
              width="600"
            />
  
            <Carousel.Caption>
                <h1>Mobile enabled</h1>
                <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  export default ControlledCarousel;