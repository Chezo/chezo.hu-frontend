import './style.css'
import React from 'react';
import { serverIp } from '../../../../static/constants'
import axios from 'axios';
import MyCarousel from '../../Carousel/Carousel';
import Placeholder from 'react-bootstrap/Placeholder';
import { BigProjectPlaceholder, SmallProjectPlaceholder } from './Placeholders'


export default function LatestProjects() {
    return (
        <div className='card center' >
            <div className='cardTitle'>Latest projects</div>
            <BigProjectWithIMG />
            <div className='divider'></div>
            <SmallProjectWithIMG />
        </div>
    );
};


function SmallProjectWithIMG() {
    const [project, setProject] = React.useState(null);

    React.useEffect(() => {
        axios.get(serverIp + 'projects/latestSmall').then((response) => {
            setProject(response.data.data.repository);
        });
    }, []);

    if (!project) return (
        <SmallProjectPlaceholder />
    );

    return (
        <div className='flexContainer flexContainerSmallIMG'>
            <a href={project.url} target='_blank' className='carouselIMGContainer'>
                <img src={project.imageURL.text + "/smallIMG.avif"} alt={"smallIMG.avif"} style={{ width: 250 }} />
            </a>
            <div className='smallprojectContainer'>
                <div className='projectTitle'><a href={project.url} target="_blank" rel="noopener noreferrer">{JSON.stringify(project.url).substring(project.url.lastIndexOf("/") + 2, project.url.length + 1)}</a></div>
                <div className='shortDescription'>{project.description}</div>
                <div className='stack'><b>Technology Stack: </b>{project.techStack.text}</div>
                <TeamSize collaborators={project.collaborators} />
                <div className='projectButton'> <a href={project.url} target="_blank" rel="noopener noreferrer" >⧉ Find out more </a></div>
            </div>
        </div>
    );
}

function BigProjectWithIMG() {
    const [project, setProject] = React.useState(null);

    React.useEffect(() => {
        axios.get(serverIp + 'projects/latest').then((response) => {
            setProject(response.data.data.repository);
        });
    }, []);
    if (!project) return (
        <BigProjectPlaceholder />
    );

    return (
        <div >
            <div className='BIGprojectTitle'><a href={project.url} target="_blank" rel="noopener noreferrer">{JSON.stringify(project.url).substring(project.url.lastIndexOf("/") + 2, project.url.length + 1)}</a></div>
            <div className='BIGshortDescription'>{project.longDescription.text}</div>
            <MyCarousel url={project.imageURL.text} projectURL={project.url} imgs={project.images} />
            <div className='BIGstack'><b>Technology Stack: </b>{project.techStack.text}</div>
            <Collaborators collaborators={project.collaborators} />
            <div className='bigprojectcontainer'>
                <div className='bigprojectcontainer2'>
                    <button className='BIGprojectButton' onClick={() => window.open(project.url, '_blank')}> Find out more </button>
                </div>
            </div>
        </div>
    );
}


function Collaborators(props) {
    if (props.collaborators.totalCount > 1) {
        return (<div>
            <TeamSize collaborators={props.collaborators} />
            <div className='teamMember mentionText'><b>To mention: </b></div>
            {props.collaborators.edges.map((members, index) =>
                <LeaveMe key={index} member={members.node} />
            )}
        </div>);
    } else {
    }
}


function TeamSize(props) {
    if (!props || props.collaborators == null) return (
        <div className='teamSize'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={1} />
            </Placeholder></div>);

    if (props != null && props.collaborators.totalCount > 1)
        return <div className='teamSize'><b>Team Size: </b>{props.collaborators.totalCount}</div>;
}

function LeaveMe(props) {
    if (props.member.login === "Chezo") {
    } else {
        return (<div className='teamMember'><b><a href={props.member.url} target='_blank' rel="noopener noreferrer" >{JSON.stringify(props.member.login).substring(1, props.member.login.length + 1)}</a></b></div>);
    }
}
