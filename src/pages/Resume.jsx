import React from 'react'
import ResumePdf from '../assets/CV/MizanurRahamanResume(V30.0.0).pdf'
import { Helmet } from 'react-helmet'

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Resume | Mizanur Rahaman</title>
                <meta name="description" content="View the resume of Mizanur Rahaman." />
            </Helmet>
            <iframe
                src={ResumePdf}
                width="100%"
                title="Resume PDF"
                style={{ border: 'none', height: '100vh' }}
            ></iframe>
        </div>
    )
}

export default Resume
