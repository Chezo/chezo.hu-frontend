import './style.css'
import React from 'react';
import { serverIp } from '../../../../static/constants'
import axios from 'axios';
import Placeholder from 'react-bootstrap/Placeholder';


export default function OtherProjects() {
    const [projects, setProjects] = React.useState(null);

    React.useEffect(() => {
        axios.get(serverIp + 'projects/other').then((response) => {
            //console.log(response.data)
            setProjects(response.data);
        });
    }, []);

    //console.log(projects)
    if (!projects) return (
        <div className='card center' >
            <div className='cardTitle'>Other projects</div>
            <OtherProjectPlaceholder />
            <OtherProjectPlaceholder />
            <OtherProjectPlaceholder />
        </div>
    );

    return (<div className='card center' >
        <div className='cardTitle'>Other projects</div>
        {projects.map((members, index) =>
            <OtherProject key={index} others={members.data.repository} />
        )}

        <button className='findOutMore' onClick={() => window.open('https://github.com/Chezo', '_blank')} > More on git</button>
    </div>);
}


function OtherProjectPlaceholder() {
    return <div>
        <div className='otherProject'>
            <div className='projectName'>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={1} />
                </Placeholder></div>
            <div className='otherProjectShortDescription'>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={2} />
                </Placeholder></div>
        </div>
        <div className='otherProjectStack'><b></b>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={3} />
            </Placeholder>
        </div>
        <div className='otherProjectFindOutMore'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={1} />
            </Placeholder></div>
    </div>;
}

function OtherProject(props) {
    return (
        <div className='otherProject'>
            <div className='projectName'><a href={props.others.url} target="_blank" rel="noopener noreferrer">{JSON.stringify(props.others.url).substring(props.others.url.lastIndexOf("/") + 2, props.others.url.length + 1)}</a></div>
            <div className='otherProjectShortDescription'>{props.others.longDescription.text}</div>
            <div className='otherProjectStack'><b>Technology stack:</b> {props.others.techStack.text}</div>
            <div className='otherProjectFindOutMore'><a href={props.others.url} target="_blank" rel="noopener noreferrer">⧉ Find out more </a></div>
        </div>
    );
}
