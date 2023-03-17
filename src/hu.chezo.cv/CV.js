import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import ReactRecaptcha3 from 'react-google-recaptcha3';

export default function CV() {
    console.log('Before init');
    ReactRecaptcha3.init('6LdNcbcjAAAAALa92Ghdi5CxQDxL1a9dF0vHvwAk').then(
        (status) => {
            console.log("RECAPTCHAV3" + status);
        }
    );
    console.log('After init');

    return (
        <div>
            <Header />
            <Body />
        </div>);

}



