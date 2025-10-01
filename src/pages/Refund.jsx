import React from 'react'
import { NavBar } from '../components/NavBar'
// import { HashLink } from 'react-router-hash-link'
import { Helmet } from 'react-helmet';

const Refund = () => {
    return (
        <div>
            <Helmet>
                <title>Refund Policy | Mizanur Rahaman Portfolio</title>
                <link rel="canonical" href="https://mizanur.in/refund" />
                <meta name="description" content="Read the Refund Policy of Mizanur Rahaman's portfolio website. Learn about the rules and regulations governing the use of our services." />
                <meta name="keywords" content="Refund Policy, Mizanur Rahaman, User Agreement, Service Terms" />
                <meta property="og:title" content="Refund Policy | Mizanur Rahaman Portfolio" />
                <meta property="og:description" content="Read the Refund Policy of Mizanur Rahaman's portfolio website. Learn about the rules and regulations governing the use of our services." />
                <meta property="og:image" content="https://mizanur.in/logo_me.png" />
                <meta property="og:url" content="https://mizanur.in/refund" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Mizanur's Portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Refund Policy | Mizanur Rahaman Portfolio" />
                <meta name="twitter:description" content="Read the Refund Policy of Mizanur Rahaman's portfolio website. Learn about the rules and regulations governing the use of our services." />
                <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
            </Helmet>
            <NavBar />
            <div className='ParentRapper-Privacy'>
                <div style={{ height: '50vh' }}>
                    <h2 className=' heading'>Refund and Cancellation</h2>
                    <p className="PrivacyPara">
                        All sales from the website:www.mizanur.in final.
                    </p>
                    <p className="PrivacyPara">
                        No cancellation, no Refunds, under any circumstances or of whatsoever nature. We strongly recommend that before payment, our visitors should read all information about our products, services and support given to our clients.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Refund
