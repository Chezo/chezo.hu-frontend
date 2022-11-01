import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';



function BigProjectPlaceholder() {
    return (
        <div >
            <div >
                <div className='BIGprojectTitle'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={3} />
                    </Placeholder>
                </div>
                <div className='BIGshortDescription'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={10} />
                    </Placeholder>
                </div>
                <div className='BIGprojectImage BIGimagePlaceholder'>
                </div>
                <div className='BIGstack'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={5} />
                    </Placeholder>
                </div>
                <Placeholder as="p" animation="glow">
                    <Placeholder xs={3} />
                </Placeholder>
                <div className='BIGprojectButton' > </div>
            </div>
        </div>

    );
}


function SmallProjectPlaceholder() {
    return (
        <div className='flexContainer flexContainerSmallIMG'>
            <div className='projectImage'>
                <div className="imagePlaceholder">

                </div>
            </div>
            <div className='smallprojectContainer'>
                <div className='projectTitle'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={1} />
                    </Placeholder>
                </div>
                <div className='shortDescription'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={3} />
                    </Placeholder>
                </div>
                <div className='stack'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={2} />
                    </Placeholder>
                </div>
            
                <div className='projectButton'>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={4} />
                    </Placeholder>
                </div>
            </div>
        </div>
    );
}


export { BigProjectPlaceholder , SmallProjectPlaceholder}