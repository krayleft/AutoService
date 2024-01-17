import React from "react";

class CarouselPhoto1 extends React.Component {
    render() {
    return (
        <img className="d-block w-100" height='500px' src={this.props.image} alt="None Image" />
    )
    }
  }

export default CarouselPhoto1