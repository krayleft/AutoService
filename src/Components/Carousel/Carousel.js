import React from 'react';
import CarouselJpg1 from "../../Img/Carousel/1.jpg"
import CarouselJpg2 from "../../Img/Carousel/2.jpg"
import CarouselJpg3 from "../../Img/Carousel/3.jpg"
import CarouselJpg4 from "../../Img/Carousel/4.jpg"
import CarouselJpg5 from "../../Img/Carousel/5.jpg"
import CarouselJpg6 from "../../Img/Carousel/6.jpg"
import CarouselPhoto1 from './CarouselPhoto1'
import CarouselPhoto2 from './CarouselPhoto2'
import CarouselPhoto3 from './CarouselPhoto3'
import CarouselPhoto4 from './CarouselPhoto4'
import CarouselPhoto5 from './CarouselPhoto5'
import CarouselPhoto6 from './CarouselPhoto6'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <CarouselPhoto1 image={CarouselJpg1}/>
                    </div>
                    <div className="carousel-item">
                        <CarouselPhoto2 image={CarouselJpg2}/>
                    </div>
                    <div className="carousel-item">
                        <CarouselPhoto3 image={CarouselJpg3}/>
                    </div>
                    <div className="carousel-item">
                        <CarouselPhoto4 image={CarouselJpg4}/>
                    </div>
                    <div className="carousel-item">
                        <CarouselPhoto5 image={CarouselJpg5}/>
                    </div>
                    <div className="carousel-item">
                        <CarouselPhoto6 image={CarouselJpg6}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;