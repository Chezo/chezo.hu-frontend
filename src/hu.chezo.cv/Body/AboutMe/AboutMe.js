import React from 'react';


export default class Body extends React.Component {
    render() {

        return (
            <div className='center card'>
                <div className='cardTitle'>About me</div>

                <p><b className='miniTitle'>Languages: </b>   Java, Scala, Kotlin, C#,  HTML5, CSS3, Javascript</p>
                <p><b className='miniTitle'>Tools: </b> Git, Postman, Maven, Gradle, JUnit4, Mockito, OpenApi - Codegen, Checkstyle, SonarLint, Gitlab, Jacoco</p>
                <p><b className='miniTitle'>Frameworks:</b>  Spring Boot, React</p>
                <p><b className='miniTitle'>Total experience</b> - 2 years</p>
            </div>

        );
    }
}