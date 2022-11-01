import React from 'react';
import './style.css';
import { progexp } from '../../../static/constants'


export default class ProgrammingExperience extends React.Component {
    render() {
        return (
            <div className='card center'>
                <div className='cardTitle'>Programming experience</div>
                {progexp.map((exp, index) =>
                    <Programming experience={exp} key={index} />
                )}
            </div>
        );
    }
}

function Programming(props) {
    return (
        <div className='progExperienceContainer'>
            <div className='companyContainer'>
                <div className='position'><b>{props.experience.position}-</b></div>
                <div className='companyData'>
                    <div className='company'> <a href={props.experience.url} target='_blank' rel="noopener noreferrer"> {props.experience.company} </a></div>
                    <div className='workDate'>{' (' + props.experience.date + ')'}</div></div>
            </div>
            <div className='description'>{props.experience.description}</div>
            <div className='stack'><b>Environment :</b> {props.experience.stack}</div>
        </div>
    );
}
