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
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} renderIndicator={false}>
                {
                    masni.map((dog, index) => (
                        <div key={index} onClick={() => window.open('https://www.instagram.com/masnikakutyus/', '_blank')}>
                            <img src={dog.img} alt={dog.description} />
                        </div>
                    ))
                }
            </Carousel >
        );
    }
};