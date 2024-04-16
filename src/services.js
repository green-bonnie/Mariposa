import React from 'react';
import { Element } from 'react-scroll';
import "./services.css";
 
function Services() {
    return (
        <React.Fragment>
            <Element id='services' name='services'>
                <div className="Services">
                    <text className="Birth">
                    <img className="birth" src={require('./3.png')} alt='Birth Doula' />
                    <h3 className="title">Birth Doula Package</h3>
                        <p>
                        Text, Email, Voice support from signing of contract
                        </p>
                        <p>
                        2 Prenatal Appointments in Home
                        </p>
                        <p>
                        On Call from 38 weeks until delivery
                        </p>
                        <p>
                        In person labor support from request time to 3 hours after birth
                        </p>
                        <p>
                        One postpartum visit in Home
                        </p>
                        <p>
                        Postnatal Gift
                        </p>
                    <br />
                    <h4>
                        Investment: $1,200
                    </h4>
                    </text>
                    <text className="Postpartum">
                    <img className="postpartum" src={require('./5.png')} alt='Postpartum Doula' />
                    <h3 className="title">Postpartum Package</h3>
                        <p>
                        Emotional support, listening to your birth story, and transition with your newborn.
                        </p>
                        <p>
                        Breastfeeding support
                        </p>
                        <p>
                        Practical support, light housework, bottle prep & cleaning, dishes, laundry, meal prep, hygiene.
                        </p>
                        <p>
                        Babywearing Education & support
                        </p>
                        <p>
                        & Attending to whatever emotional and physical needs you may have.
                        </p>
                    <br />
                    <h4>
                        $489 for 16 hours or $30/hr
                    </h4>
                    </text>
                    <text className="Placenta">
                    <img className="placenta" src={require('./6.png')} alt='Postpartum Doula' />
                    <h3 className="title">Placenta Encapsulation</h3>
                        <p>
                        Reported benefits include:
                        </p>
                        <p>
                        Improved Mood
                        </p>
                        <p>
                        Decrease in Stress Hormones
                        </p>
                        <p>
                        Increased Energy
                        </p>
                        <p>
                        Improved Milk Supply
                        </p>
                        <p>
                        Alleviated PP Bleeding
                        </p>
                        <h4>
                        Each Package Includes:
                        </h4>
                        <p>
                            Pick up
                        </p>
                        <p>
                            Processing & Encapsulation
                        </p>
                        <p>
                            Umbilical cord keepsake
                        </p>
                        <p>
                            Placenta tincture for long term use
                        </p>
                        <p>
                            drop off within first week postpartum
                        </p>
                    <br />
                    <h4>
                        Investment: $300
                    </h4>
                    </text>
                </div>
            </Element>
        </React.Fragment>
            
    )
}

export default Services;