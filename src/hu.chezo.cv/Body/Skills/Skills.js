import React from 'react';
import './style.css';
import { programmingLevels } from '../../../static/constants'

class Skills extends React.Component {
    render() {
        return (
            <div className='center card' >
                <div className='cardTitle'>Skills</div>

                {programmingLevels.map((prog, index) =>
                    <Skill skill={prog} key={index} />
                )}
                <div className='linkedIn'><a href='https://www.linkedin.com/in/zsoltnagy-chezo/' target="_blank" rel="noopener noreferrer" >⧉ More on Linkedin </a></div>
            </div>);
    }
}

function Skill(props) {
    const divStyle = {
        backgroundColor: 'green',
        width: props.skill.percentage + '%',
        height: '20px',
    }
    return (
        <div className='skill'>
            <div className='skillText'>
                <div className='skillName'>{props.skill.name}</div>
                <div className='level'>{props.skill.level}</div>
            </div>
            <div className='skillBar'><div className='skillPercentage' style={divStyle}></div></div>
        </div>
    );
}

export { Skill, Skills }