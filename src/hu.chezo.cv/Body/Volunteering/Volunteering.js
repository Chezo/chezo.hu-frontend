
import React from 'react';
import './style.css'
import { volunteering } from '../../../static/constants'

export default class Volunteering extends React.Component {
    render() {
        return (
            <div className='card volunteerCard center' >
                <div className='cardTitle'>Volunteering</div>
                {volunteering.map((org, index) => <VolunteerPlace organization={org} key={index} />)}
            </div>
        );
    }
}



function VolunteerPlace(props) {
    return (
        <div className='volunteerPlace'>
            <div className='organization'><a href={props.organization.url} target='_blank' rel="noopener noreferrer" >{props.organization.name}</a></div>
            <div className='roles'>
                {props.organization.roles.map((roles, index) => (
                    <div className='role' key={index}>
                        <div className='flexContainer'>
                            <div className='what'>{roles.what} </div>
                            <div className='when date'>{roles.when}</div>
                        </div>
                        <div className='VolunteerDescription'>{roles.description}
                        </div>
                    </div>))}
            </div>
        </div>
    );
}