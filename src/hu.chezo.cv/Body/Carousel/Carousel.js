
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './style.css';


export default function MyCarousel(props) {

    return (<Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false} showThumbs={false} renderIndicator={false}>
        {
            props.imgs.entries.map((img, index) => (
                <div className='BIGprojectImage' onClick={() => window.open(props.projectURL, '_blank')} key={index}>
                    <img className="IMGglow" style={{ width: 1200 }} src={props.url + img.path} alt={props.url + img.path} />
                </div>
            ))
        }

    </Carousel >)

}