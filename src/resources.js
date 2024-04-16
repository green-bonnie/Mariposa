import React from 'react';
import { Element } from 'react-scroll';
import './resources.css';

function Resources() {

    return (
            <Element id='resources' name='resources'>
                <div className="resources">
                    <h2>FREE RESOURCES</h2>
                    <a href={require("./MBSFreeResource.pdf")} download="Mariposa Freebie">
                        <button className="download">Download Here!</button>
                    </a>
                </div>
            </Element>
    )
}; 

export default Resources;