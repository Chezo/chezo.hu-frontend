
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';


export default function MyCarousel(props) {

    const avif = props.imgs.entries.filter(function f(img) { return img.extension == '.avif' })
    console.log(avif)
    const webp = props.imgs.entries.filter(function f(img) { return img.extension == '.webp' })
    const png = props.imgs.entries.filter(function f(img) { return img.extension == '.png' })
    return (<a href={props.projectURL} target='_blank' rel="noreferrer">
        <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false} showThumbs={false} renderIndicator={false}>

            {
                avif.map((img, index) => (
                    <picture key={index} className="BIGprojectImage">
                        <source className="IMG" style={{ width: 1200 }} type="image/avif" srcSet={props.url + img.path} alt={img.name} />
                        <img />
                    </picture>
                ))
            }
            {
                webp.map((img, index) => (
                    <picture key={index} className="BIGprojectImage">
                        <source className="IMG" style={{ width: 1200 }} type="image/webp" srcSet={props.url + img.path} alt={img.name} />
                        <img />
                    </picture>
                ))
            }

        </Carousel >
    </a >)

}