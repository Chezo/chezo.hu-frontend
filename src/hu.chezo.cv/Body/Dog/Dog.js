import React from "react";
import { masni } from '../../../static/constants'
import './style.css'
import { Carousel } from 'react-responsive-carousel';



export default class Dog extends React.Component {
    render() {
        return (<div className="card center">
            <div className='cardTitle'>My dog</div>
            <DemoCarousel />
        </div>);
    }
}


class DemoCarousel extends React.Component {
    render() {
        return (
            <a className='carouselIMGContainer' href='https://www.instagram.com/masnikakutyus/' target='_blank' rel="noreferrer" > <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} renderIndicator={false}>
                {
                    masni.map((dog, index) => (

                        <img src={dog.img} key={index} alt={dog.description} />

                    ))
                }
            </Carousel >
            </a >
        );
    }
};