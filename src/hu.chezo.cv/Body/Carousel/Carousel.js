
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';


export default function MyCarousel(props) {

    const avif = props.imgs.entries.filter(function f(img) { return img.extension === '.avif' })
    const webp = props.imgs.entries.filter(function f(img) { return img.extension === '.webp' })
    const png = props.imgs.entries.filter(function f(img) { return img.extension === '.png' })
    var pictures = []


    for (let i = 0; i < avif.length; i++) {
        const name = avif[i].name.split('.').shift();
        const path = avif[i].path.split('.').shift();

        var sources = [];

        if (i < avif.length) {
            sources.push(<source className="IMG" style={{ width: 1200 }} type="image/avif" key={props.url + path + ".avif"} srcSet={props.url + path + ".avif"} alt={name} />);
        }
        if (i < webp.length) {
            sources.push(<source className="IMG" style={{ width: 1200 }} type="image/webp" key={props.url + path + ".webp"} srcSet={props.url + path + ".webp"} alt={name} />);
        }
        if (i < png.length) {
            sources.push(<source className="IMG" style={{ width: 1200 }} type="image/png" key={props.url + path + ".png"} srcSet={props.url + path + ".png"} alt={name} />);
        }

        pictures.push(
            <picture key={i}>
                {sources}
                <img className="IMG" />
            </picture>
        )
    }



    return (<a href={props.projectURL} target='_blank' rel="noreferrer">
        <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false} showThumbs={false} renderIndicator={false}>

            {pictures.map((s) =>
                s)}


        </Carousel >
    </a >)

}