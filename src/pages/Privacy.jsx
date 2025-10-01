import React from 'react'
import { NavBar } from '../components/NavBar'

import { Helmet } from 'react-helmet';

const Privacy = () => {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy | Mizanur Rahaman Portfolio</title>
                <link rel="canonical" href="https://mizanur.in/privacy" />
                <meta name="description" content="Understand how mizanur.in collects, uses, and protects personal information, including contact form details, payment data, and your privacy rights." />
                <meta name="keywords" content="Privacy Policy, Mizanur Rahaman, Data Protection, Cashfree Payments, User Privacy Rights" />
                <meta property="og:title" content="Privacy Policy | Mizanur Rahaman Portfolio" />
                <meta property="og:description" content="Review the privacy practices of mizanur.in, including how personal data is collected, shared, and safeguarded." />
                <meta property="og:image" content="https://mizanur.in/logo_me.png" />
                <meta property="og:url" content="https://mizanur.in/privacy" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Mizanur's Portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy | Mizanur Rahaman Portfolio" />
                <meta name="twitter:description" content="Understand how mizanur.in handles personal information, payments, and privacy requests." />
                <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
            </Helmet>
            <NavBar />
            <div className='ParentRapper-Privacy'>
                <h2 className=' heading'>Privacy Policy</h2>
                <p>
                    Welcome to mizanur.in (the “Site”), the personal portfolio of Mizanur Rahaman. This Privacy Policy
                    describes how we collect, use, disclose, and safeguard information when you visit or interact with
                    the Site, engage our services, or communicate with us. By accessing the Site, you consent to the
                    practices described here. If you have any questions, please contact us using the details at the end
                    of this page.
                </p>
                <p><strong>Last updated: October 1, 2025</strong></p>

                <h3>1. Information We Collect</h3>
                <p>We collect information in the following ways:</p>
                <ul>
                    <li>
                        <strong>Information you provide voluntarily:</strong> Details submitted through the contact form
                        (first name, last name, email address, phone number, message), newsletter sign-ups, payment forms,
                        and any direct communications with us.
                    </li>
                    <li>
                        <strong>Order and payment details:</strong> When you purchase a service or digital product, we receive
                        order identifiers, billing email, phone number, and transaction status via our payment processor
                        Cashfree. Sensitive payment data such as card numbers is collected and processed directly by Cashfree
                        and is never stored on our servers.
                    </li>
                    <li>
                        <strong>Automatically collected data:</strong> We may log technical information such as IP address,
                        browser type, device information, referring pages, and the time of visits to maintain security,
                        troubleshoot issues, and understand how the Site is used.
                    </li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <p>The information we collect may be used to:</p>
                <ul>
                    <li>Respond to enquiries, support requests, and project discussions.</li>
                    <li>Process payments, issue invoices, confirm orders, and deliver digital services.</li>
                    <li>Send administrative messages such as service updates, security alerts, or policy changes.</li>
                    <li>Send optional marketing or newsletter communications (only where you have opted in, and you may opt out any time).</li>
                    <li>Improve website performance, diagnose technical problems, and prevent fraudulent or abusive activity.</li>
                    <li>Comply with legal obligations and enforce our agreements.</li>
                </ul>

                <h3>3. Legal Bases for Processing</h3>
                <p>
                    If you are located in the European Economic Area (EEA), the United Kingdom, or jurisdictions with similar
                    requirements, we rely on the following legal bases to process personal information: consent (e.g., for
                    newsletters), performance of a contract (e.g., fulfilling orders or responding to contact form requests),
                    compliance with legal obligations, and legitimate interests (e.g., improving services and safeguarding the Site).
                </p>

                <h3>4. Cookies and Similar Technologies</h3>
                <p>
                    The Site may use essential cookies to maintain session security and remember preferences. We may also use
                    anonymised analytics or performance tools to understand aggregate usage trends. You can adjust your browser
                    settings to refuse cookies; however, some portions of the Site may not function optimally without them.
                </p>

                <h3>5. Third-Party Services</h3>
                <p>
                    We partner with trusted third parties to deliver certain features. These providers only receive the minimum
                    data required to perform their services and are obligated to protect your information.
                </p>
                <ul>
                    <li>
                        <strong>Cashfree Payments:</strong> Handles the secure processing of online transactions. Please review
                        Cashfree’s privacy notice for details on how they manage your payment information.
                    </li>
                    <li>
                        <strong>Email Delivery (Nodemailer/Gmail):</strong> Facilitates sending messages submitted through the
                        contact form to our inbox.
                    </li>
                    <li>
                        <strong>Hosting and infrastructure providers:</strong> Enable us to operate the Site, store logs securely,
                        and provide technical support.
                    </li>
                </ul>

                <h3>6. Data Sharing &amp; Disclosure</h3>
                <p>
                    We do not sell your personal information. We may share data only in these limited scenarios:
                </p>
                <ul>
                    <li>With service providers and contractors who perform services on our behalf under confidentiality agreements.</li>
                    <li>To comply with legal requests, court orders, or enforceable government demands.</li>
                    <li>To detect, prevent, or address fraud, security, or technical issues.</li>
                    <li>In connection with a business transfer or reorganisation, provided safeguards remain in place.</li>
                </ul>

                <h3>7. Data Retention</h3>
                <p>
                    We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy
                    or to comply with legal, accounting, or reporting obligations. Contact form submissions and project-related
                    records are typically retained for up to 24 months unless a longer period is required to complete an active
                    engagement or resolve disputes. Payment transaction records are retained per statutory requirements.
                </p>

                <h3>8. Data Security</h3>
                <p>
                    Reasonable technical and organisational safeguards (including HTTPS encryption, access controls, and routine
                    monitoring) are employed to protect personal information. Despite these measures, no method of transmission or
                    storage is completely secure. Please notify us immediately if you suspect any security incident involving your data.
                </p>

                <h3>9. Your Rights</h3>
                <p>
                    Depending on your location, you may have rights to access, correct, update, port, or delete personal information;
                    to withdraw consent; to object to or restrict certain processing; and to lodge a complaint with a supervisory
                    authority. To exercise these rights, contact us at <a href='mailto:dev@mizanur.in'>dev@mizanur.in</a>. We will respond within the timelines required by applicable law.
                </p>

                <h3>10. Children’s Privacy</h3>
                <p>
                    The Site is not directed to children under 13 years of age, and we do not knowingly collect personal information
                    from minors. If you believe that a child has provided personal data, please contact us so we can delete it promptly.
                </p>

                <h3>11. International Data Transfers</h3>
                <p>
                    The Site is operated from India, but the hosting infrastructure or service providers may be located in other
                    countries. By using the Site, you consent to the transfer of information to regions that may have data protection
                    laws different from those in your jurisdiction. We take appropriate steps to ensure your information receives
                    adequate protection wherever it is processed.
                </p>

                <h3>12. Updates to This Policy</h3>
                <p>
                    We may revise this Privacy Policy from time to time to reflect changes in technology, our practices, or legal
                    requirements. The updated version will be indicated by the “Last updated” date above. Material changes may also be
                    announced via email or a prominent notice on the Site. Your continued use of the Site after any update signifies
                    acceptance of the revised policy.
                </p>

                <h3>13. Contact</h3>
                <p>
                    For privacy-related questions, data requests, or security concerns, please reach out to:<br />
                    <strong>Mizanur Rahaman</strong><br />
                    Email: <a href='mailto:dev@mizanur.in'>dev@mizanur.in</a><br />
                    Website: <a href='https://mizanur.in'>https://mizanur.in</a>
                </p>
                <p>
                    We appreciate your trust in mizanur.in and remain committed to safeguarding your personal information.
                </p>
            </div>
        </div>
    )
}

export default Privacy;
