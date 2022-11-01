import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


$(window).scroll(function() {
	if ($(this).scrollTop()) {
		var y = $(this).scrollTop();
		if (y > 550) { //<how many pixels needed to show the button
			$('#scroll-up:hidden').stop(true, true).fadeIn();
		} else {
			$('#scroll-up').stop(true, true).fadeOut();
		}
	} else {
		$('#scroll-up').stop(true, true).fadeOut();
	}
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
