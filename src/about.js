import { React } from 'react';
import { Element } from 'react-scroll';
import './about.css'; 

function About() {
            return (
                <Element id='home' name='home'>
                    <div className="about">
                        <text>
                        <h2 className="M">Meet Bethany!</h2>{"\n"}
                        <p className="M-Bio">
                        Hey there, I'm Bethany! The person behind Mariposa Birth Services. Becoming a mom Changed my life and raising two little 
                        ones has led me to find my passion, supporting other mama's in their journeys through pregnancy, childbirth, and postpartum 
                        recovery. My own birth experiences with my kids were vastly different from each other. I've had both an induced medicated 
                        hospital birth and an unmedicated water birth at a birthing center. I have experienced both and assisted with both. Whether 
                        you want a medicated birth or a natural birth, my role as your doula is to support YOU and give you the tools,techniques and 
                        support to help you achieve the birth of your dreams.
                        </p>
                        </text>
                        <img className="Bethany" src={require('./Bethany.JPG')} alt='Bethany' />
                    </div>
                </Element>
            );
        }

export default About;