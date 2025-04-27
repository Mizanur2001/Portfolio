import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js'
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const BackendUrl = process.env.REACT_APP_BACKEND_URL
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", amount: "" });
    const [orderId, setOrderId] = useState("")
    const navigate = useNavigate();


    let cashfree;
    let insitialzeSDK = async function () {

        cashfree = await load({
            mode: "production",
        })
    }
    insitialzeSDK()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const getSessionId = async () => {
        try {
            let res = await axios.post(`${BackendUrl}/api/v1/tools/payment/collect`, {
                amount: formData.amount,
                customer_name: formData.name,
                customer_phone: formData.phone,
                customer_email: formData.email
            })
            
            
            if (res.data && res.data.data.payment_session_id) {
                setOrderId(res.data.data.order_id)
                return res?.data?.data?.payment_session_id
            }
        } catch (error) {
            console.log(error)
        }
    }


    const verifyPayment = async () => {
        try {
            let res = await axios.post(`${BackendUrl}/api/v1/tools/payment/verify`, { orderId })
            if (res && res.data) {
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        let sessionId = await getSessionId()
        let checkoutOptions = {
            paymentSessionId: sessionId,
            redirectTarget: "_modal",
        }
        cashfree.checkout(checkoutOptions).then((res) => {
            console.log("payment initialized")
            verifyPayment(orderId)
        })
    };

    return (
        <section className="payment-form">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <div className="form-container">
                            <h2 className="text-center">Payment Form</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formAmount">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter the amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PaymentForm;