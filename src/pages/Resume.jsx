import React from 'react'
import ResumePdf from '../assets/CV/MizanurRahamanResume(V30.0.0).pdf'

const Resume = () => {
    return (
        <div>
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
