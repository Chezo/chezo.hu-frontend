import React from "react";
import CookieConsent from "react-cookie-consent";


export default class Cookie extends React.Component {
    render() {
        return (<div><CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent></div>);
    }

}