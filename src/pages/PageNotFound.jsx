import React from 'react'
import { Helmet } from "react-helmet";

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <Helmet>
                <title>404 Not Found | Mizanur Rahaman</title>
                <meta name="description" content="The page you are looking for does not exist." />
                <link rel="canonical" href="https://mizanur.in/404" />
            </Helmet>
            <div className="background" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(#0C0E10, #446182)'
            }}>
                <div className="ground" style={{
                    position: "absolute",
                    bottom: 0,
                    width: '100%',
                    height: '25vh',
                    background: '#0C0E10',
                }}></div>
            </div >
            <div className="container" style={{
                position: 'relative',
                margin: '0 auto',
                width: '85%',
                height: '100vh',
                paddingBottom: '25vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <div className="left-section" style={{ position: "relative", width: '40%' }}>
                    <div className="inner-content" style={{
                        position: "absolute",
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}>
                        <h1 className="heading" style={{
                            textAlign: 'center',
                            fontSize: '9em',
                            lineHeight: '1.3em',
                            margin: '2rem 0 0.5rem 0',
                            padding: 0,
                            textShadow: '0 0 1rem #fefefe',
                            fontFamily: "Fira Sans, sans-serif",
                        }}>404</h1>
                        <p className="subheading" style={{
                            textAlign: 'center',
                            maxWidth: '480px',
                            fontSize: '1.5em',
                            lineHeight: '1.15em',
                            padding: '0 1rem',
                            margin: '0 auto',
                            fontFamily: "Fira Sans, sans-serif",
                        }}>Looks like the page you were looking for is no longer here.</p>
                    </div>
                </div>
                <div className="right-section" style={{ position: "relative", width: '50%', }}>
                    <svg className="svgimg" xmlns="http://www.w3.org/2000/svg" viewBox="51.5 -15.288 385 505.565" style={{
                        position: 'absolute',
                        bottom: 0,
                        paddingTop: '10vh',
                        paddingLeft: '1vh',
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}>
                        <g className="bench-legs" style={{ fill: "#0C0E10" }}>
                            <path d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111
          v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z" />
                        </g>
                        <g className="top-bench" style={{ stroke: "#0C0E10", strokeWidth: "1px", fill: "#5B3E2B" }}>
                            <path d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333
          c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583
          c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723
          c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028
          c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z"
                            />
                        </g>
                        <g className="bottom-bench" style={{ stroke: "#0C0E10", strokeWidth: "1px", fill: "#5B3E2B" }}>
                            <path d="M417.361,459.027c0,0.769-1.244,1.39-2.778,1.39H170.139c-1.533,0-2.777-0.621-2.777-1.39v-4.86
          c0-0.769,1.244-0.694,2.777-0.694h244.444c1.534,0,2.778-0.074,2.778,0.694V459.027z" style={{ fill: '#4b3225' }} />
                            <path d="M185.417,443.75H400c0,0,18.143,9.721,17.361,10.417l-250-0.696C167.303,451.65,185.417,443.75,185.417,443.75z" />
                        </g>
                        <g id="lamp">
                            <path className="lamp-details" d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917
          c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z" style={{ fill: '#202425' }} />
                            <path className="lamp-accent" d="M128.472,93.75c0,1.534-1.244,2.778-2.778,2.778h-13.889c-1.534,0-2.778-1.244-2.778-2.778V79.861
          c0-1.534,1.244-2.778,2.778-2.778h13.889c1.534,0,2.778,1.244,2.778,2.778V93.75z" style={{ fill: "#2a2e2f" }} />

                            <circle className="lamp-light" cx="119.676" cy="44.22" r="40.51" style={{fill: '#EFEFEF'}}/>
                            <path className="lamp-details" d="M149.306,71.528c0,3.242-13.37,13.889-29.861,13.889S89.583,75.232,89.583,71.528c0-4.166,13.369-13.889,29.861-13.889
          S149.306,67.362,149.306,71.528z"/>
                            <radialGradient className="light-gradient" id="SVGID_1_" cx="119.676" cy="44.22" r="65" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: "#EDEDED", stopOpacity: 0.5 }}>
                                    <animate attributeName="stop-opacity" values="0.0; 0.5; 0.0" dur="5000ms" repeatCount="indefinite"></animate>
                                </stop>
                                <stop offset="100%" style={{ stopColor: "#EDEDED", stopOpacity: 0 }} />
                            </radialGradient>
                            <circle className="lamp-light__glow" fill="url(#SVGID_1_)" cx="119.676" cy="44.22" r="65" />
                            <path className="lamp-bottom" d="M135.417,487.781c0,1.378-1.244,2.496-2.778,2.496H106.25c-1.534,0-2.778-1.118-2.778-2.496v-74.869
          c0-1.378,1.244-2.495,2.778-2.495h26.389c1.534,0,2.778,1.117,2.778,2.495V487.781z" />
                        </g>
                    </svg>
                </div>
            </div >
        </div>
    )
}

export default PageNotFound
