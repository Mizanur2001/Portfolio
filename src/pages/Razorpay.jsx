import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const { useNavigate } = require('react-router-dom');

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL
const RazorpayCheckout = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        amount: 500,
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev, [name]: name === "amount" ? value === "" ? "" : Number(value) : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post(BACKEND_BASE_URL + "/api/v1/tools/payment/razorpay/initiate", { amountInPaise: formData?.amount * 100 })
        if (response?.data?.code === 202) {
            return toast.error(response?.data?.error)
        }

        var options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: formData?.amount * 100,
            currency: "INR",
            name: "Mizanur Payments",
            description: formData?.message || "Invoice Payment",
            image: "https://mizanur.in/static/media/logo_me.a69395c0d314b1e15781.png",
            order_id: response.data.data.order.id,
            handler: async function (response) {
                const body = {
                    ...response,
                };

                const validateRes = await axios.post(BACKEND_BASE_URL + '/api/v1/tools/payment/razorpay/validate', body);

                const jsonRes = validateRes.data;

                if (jsonRes.status === 'success') {
                    toast.success("Payment Successful Thank You " + formData?.name + "!")
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        amount: '',
                        message: "",
                    })
                    setTimeout(() => {
                        navigate('/');
                    }, 4000);
                }
            },
            prefill: {
                name: formData?.name,
                email: formData?.email,
                contact: formData?.phone,
            },
            notes: {
                address: "Mizanur Office for now :)",
            },
            theme: {
                color: "#3399cc",
            },
        };

        var rzp1 = new window.Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            toast.error("Payment failed, please try again :(")
        });
        rzp1.open();
    };

    const formatINR = (value) =>
        value.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2,
        });

    const invoiceAmount = Number(formData.amount) || 0;
    const gatewayCharge = invoiceAmount * 0.02;
    const tax = gatewayCharge * 0.18;
    const totalDue = invoiceAmount + gatewayCharge + tax;

    return (
        <>
            <NavBar />
            <ToastContainer />
            <section
                className="py-5 text-white"
                style={{
                    minHeight: "100vh",
                    background:
                        "radial-gradient(circle at top, #0ea5e980, transparent 55%), #020617",
                }}>
                <Container style={{ paddingTop: '4rem' }}>
                    <Row className="justify-content-center">
                        <Col lg={10} xl={8}>
                            <Card className="border-0 shadow-lg overflow-hidden">
                                <Row className="g-0">
                                    <Col lg={6} className="bg-dark">
                                        <div className="h-100 p-4 p-lg-5 d-flex flex-column justify-content-between">
                                            <div>
                                                <Badge bg="info" className="mb-3 text-uppercase">
                                                    Invoice Payment
                                                </Badge>
                                                <h1 className="display-5 fw-semibold">
                                                    Pay securely with Razorpay
                                                </h1>
                                                <p className="text-secondary">
                                                    Complete your project invoice or service fee quickly and
                                                    securely. Razorpay handles the transaction while you stay
                                                    focused on the work that matters.
                                                </p>
                                            </div>
                                            <div className="bg-opacity-75 bg-black rounded-4 p-4 mt-4">
                                                <p className="text-uppercase text-secondary small mb-3">
                                                    Payment summary
                                                </p>

                                                <div className="d-grid gap-3">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="text-secondary text-uppercase small">
                                                            Invoice amount
                                                        </span>
                                                        <span className="fs-3 fw-semibold text-info">
                                                            {formatINR(invoiceAmount)}
                                                        </span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center border-top border-white-25 pt-3">
                                                        <span className="text-secondary text-uppercase small">
                                                            Gateway charge (2%) - UPI
                                                        </span>
                                                        <span className="fs-5 fw-semibold text-info">
                                                            {formatINR(gatewayCharge)}
                                                        </span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center border-top border-white-25 pt-3">
                                                        <span className="text-secondary text-uppercase small">
                                                            GST on charge (18%)
                                                        </span>
                                                        <span className="fs-5 fw-semibold text-info">
                                                            {formatINR(tax)}
                                                        </span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center border-top border-white-25 pt-3">
                                                        <span className="text-secondary text-uppercase small">
                                                            Total payable
                                                        </span>
                                                        <Badge bg="info" className="fs-5 px-3 py-2">
                                                            {formatINR(totalDue)}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6} className="bg-light">
                                        <div className="h-100 p-4 p-lg-5">
                                            <h2 className="fw-semibold mb-4 text-dark">
                                                Payment details
                                            </h2>
                                            <Form onSubmit={handleSubmit} className="d-grid gap-4">
                                                <Form.Group controlId="paymentName">
                                                    <Form.Label className="text-secondary text-uppercase small mb-2">
                                                        Full name
                                                    </Form.Label>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter your full name"
                                                        required
                                                    />
                                                </Form.Group>

                                                <Row>
                                                    <Col>
                                                        <Form.Group controlId="paymentEmail">
                                                            <Form.Label className="text-secondary text-uppercase small mb-2">
                                                                Email address
                                                            </Form.Label>
                                                            <Form.Control
                                                                size="lg"
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                placeholder="you@example.com"
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group controlId="paymentPhone">
                                                            <Form.Label className="text-secondary text-uppercase small mb-2">
                                                                Phone number
                                                            </Form.Label>
                                                            <Form.Control
                                                                size="lg"
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                placeholder="+91 98765 43210"
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Form.Group controlId="paymentAmount">
                                                    <Form.Label className="text-secondary text-uppercase small mb-2">
                                                        Invoice amount (INR)
                                                    </Form.Label>
                                                    <Form.Control
                                                        size="lg"
                                                        type="number"
                                                        name="amount"
                                                        value={formData.amount}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Form.Group>

                                                <Form.Group controlId="paymentMessage">
                                                    <Form.Label className="text-secondary text-uppercase small mb-2">
                                                        Additional notes
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Add project notes or special instructions."
                                                    />
                                                </Form.Group>

                                                <div className="pt-2">
                                                    <Button
                                                        type="submit"
                                                        size="lg"
                                                        className="w-100 py-3 fw-semibold text-uppercase letter-spacing-1"
                                                        variant="info"
                                                    >
                                                        Proceed to Razorpay Checkout
                                                    </Button>
                                                    <p className="mt-3 text-center small text-secondary">
                                                        You&apos;ll be redirected to Razorpay to finalize this secure payment.
                                                    </p>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default RazorpayCheckout;