import React from 'react'
import { NavBar } from '../components/NavBar'

const Pricing = () => {
    return (
        <div>
            <NavBar />
            <div className='ParentRapper-Privacy'>
                <div style={{ height: '55vh' }}>
                    <h2 className='heading'>Our Pricing</h2>
                    <p className="PrivacyPara">
                        I'm thrilled to introduce our Basic Package, starting at just &#8377; 56999. This package is perfect for startups and small businesses looking to kickstart their technology journey. Here's what you get:
                    </p>
                    <p className="PrivacyPara">
                        <h3>Basic Package: &#8377; 56999</h3>
                    </p>
                    <ul>
                        <li>Essential features to get you started</li>
                        <li>Tailored solutions for your specific needs</li>
                        <li>Dedicated support to guide you every step of the way</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing
