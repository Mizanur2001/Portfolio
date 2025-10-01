import React from 'react'
import { NavBar } from '../components/NavBar'

import { Helmet } from 'react-helmet';

const Shipping = () => {
    return (
        <div>
            <Helmet>
                <title>Shipping Policy | Mizanur Rahaman Portfolio</title>
                <link rel="canonical" href="https://mizanur.in/shipping" />
                <meta name="description" content="Read the Shipping Policy of Mizanur Rahaman's portfolio website. Learn about the rules and regulations governing the use of our services." />
                <meta name="keywords" content="Shipping Policy, Mizanur Rahaman, User Agreement, Service Terms" />
                <meta property="og:title" content="Shipping Policy | Mizanur Rahaman Portfolio" />
                <meta property="og:description" content="Read the Shipping Policy of Mizanur Rahaman's portfolio website. Learn about the rules and regulations governing the use of our services." />
                <meta property="og:image" content="https://mizanur.in/logo_me.png" />
                <meta property="og:url" content="https://mizanur.in/shipping" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Mizanur's Portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Shipping Policy | Mizanur Rahaman Portfolio" />
                <meta name="twitter:description" content="Read the Shipping Policy of Mizanur Rahaman's portfolio website. Learn about the rules and regulations governing the use of our services." />
                <meta name="twitter:image" content="https://mizanur.in/logo_me.png" />
            </Helmet>
            <NavBar />
            <div className='ParentRapper-Privacy'>
                <h2 className=' heading'>Shipping Policy</h2>
                <p>
                    Welcome to mizanur.in. This Shipping Policy explains how and when digital deliverables
                    purchased through our website are made available to you. By placing an order, you agree to
                    the terms described below. If anything remains unclear, feel free to reach out using the
                    contact details listed at the end of this page.
                </p>
                <h3>1. Nature of Deliverables</h3>
                <p>
                    Unless explicitly stated otherwise in the product description, all items offered on
                    mizanur.in are digital products or services. These may include design assets, code snippets,
                    consulting sessions, or other creative outputs. No physical goods are shipped.
                </p>
                <h3>2. Order Processing &amp; Delivery Window</h3>
                <p>
                    Orders are processed automatically once payment has been confirmed. Instant downloads become
                    available within a few minutes. For custom or made-to-order services, the delivery timeline
                    specified on the product page applies. If no timeline is mentioned, expect initial delivery
                    within 3 business days. Business days exclude weekends and Indian national holidays.
                </p>
                <h3>3. Communication of Deliverables</h3>
                <p>
                    Digital products are delivered via one or more of the following methods:
                </p>
                <ul>
                    <li>Email sent to the address provided during checkout.</li>
                    <li>A secure download link presented immediately after successful payment.</li>
                    <li>Access through your client dashboard or collaboration workspace, when applicable.</li>
                </ul>
                <p>
                    Please ensure that the email address supplied is accurate and that you have access to any
                    collaboration tools referenced during checkout.
                </p>
                <h3>4. Shipping Fees</h3>
                <p>
                    There are no shipping or handling charges for digital goods. Any fees displayed during
                    checkout relate solely to the product or service purchased. Should a physical component be
                    explicitly part of the offering, associated courier charges will be communicated before you
                    complete payment.
                </p>
                <h3>5. Order Tracking &amp; Status Updates</h3>
                <p>
                    You will receive an email confirmation once your order is received and another notification
                    when the deliverable is ready. For ongoing projects, progress updates are provided through the
                    communication channel agreed upon with you (such as email, Slack, or Trello). If you have not
                    received a status update within the promised timeframe, contact us for assistance.
                </p>
                <h3>6. Failed or Delayed Delivery</h3>
                <p>
                    If you do not receive your digital product within 30 minutes of payment, first check your spam
                    or promotions folder and confirm that your inbox accepts attachments or external links. Should
                    the files still be missing, please email <a href='mailto:dev@mizanur.in'>dev@mizanur.in</a>
                    with your order number. For custom services that exceed the stated delivery timeline, a new
                    schedule will be shared promptly. You may request a refund in line with our Refund Policy if the
                    updated timeline is not acceptable.
                </p>
                <h3>7. Access Issues &amp; Re-Delivery</h3>
                <p>
                    Download links are valid for the duration stated in your confirmation email. If the link expires
                    or you lose access, contact us and we will regenerate access after verifying your purchase. For
                    data security, repeated requests from unverified email addresses may be declined.
                </p>
                <h3>8. Geographical Coverage</h3>
                <p>
                    Digital services are available globally unless a jurisdiction-specific restriction is mentioned
                    on the product page. Any physical shipments, when offered, are currently limited to addresses in
                    India. We reserve the right to decline an order if delivery to your region is not feasible.
                </p>
                <h3>9. Changes to This Policy</h3>
                <p>
                    This Shipping Policy may be updated periodically to reflect operational, legal, or regulatory
                    requirements. The most recent version will always be posted on this page. Continued purchases
                    after an update constitute acceptance of the revised terms.
                </p>
                <h3>10. Contact</h3>
                <p>
                    For all shipping or delivery-related questions, contact Mizanur Rahaman at
                    <a href='mailto:dev@mizanur.in'> dev@mizanur.in</a>
                </p>
                <p>
                    Thank you for trusting mizanur.in. We aim to deliver high-quality digital experiences promptly
                    and reliably.
                </p>
            </div>
        </div>
    )
}

export default Shipping;
