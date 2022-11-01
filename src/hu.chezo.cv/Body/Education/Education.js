import React from 'react';
import './style.css'
import { schools } from '../../../static/constants';

export default class Education extends React.Component {
    render() {
        return (
            <div className='card center'>
                <div className='cardTitle'>Education</div>
                {schools.map((sch, index) => <School school={sch} key={index} />)}
            </div>
        );
    }
}

function School(props) {
    return (
        <div className='school'>
            <div className='theme'>{props.school.profession}</div>
            <div className='flexContainer'>
                <div className='schoolName' > <a href={props.school.url} target='_blank' rel="noopener noreferrer">{props.school.name}</a></div>
                <div className='schoolDate'>  {props.school.date}</div>
            </div>
        </div>
    );
}
