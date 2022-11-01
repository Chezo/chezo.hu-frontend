import React from 'react';
import { Skill } from '../Skills/Skills';
import './style.css'
import { languageLevels } from '../../../static/constants'

export default class LanguageSkills extends React.Component {

    render() {
        return (
            <div className='card center'>
                <div className='cardTitle'>Language skills</div>
                {languageLevels.map((lang, index) =>
                    <Skill skill={lang} key={index} />)}
            </div>);
    }
}