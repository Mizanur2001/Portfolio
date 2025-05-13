import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const PaymentForm = () => {
    const BackendUrl = process.env.REACT_APP_BACKEND_URL
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", amount: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get("name") || "";
        const email = params.get("email") || "";
        const phone = params.get("phone") || "";
        const amount = params.get("amount") || "";


        if (name && email && phone && amount) {
            setFormData({ name, email, phone, amount });
        }
    }, []);

    // Automatically submit the form if all fields are filled
    useEffect(() => {
        if (
            formData.name &&
            formData.email &&
            formData.phone &&
            formData.amount
        ) {
            handleSubmit({ preventDefault: () => { } });
        }
        // eslint-disable-next-line
    }, [formData]);


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


            if (res.data.code === 202) {
                toast.error(res.data.error)
                return
            }



            if (res.data && res.data.data.payment_session_id) {
                const data = {
                    orderId: res.data.data.order_id,
                    paymentSessionId: res.data.data.payment_session_id,
                }
                return data
            }
        } catch (error) {
            console.log(error)
        }
    }


    const verifyPayment = async (orderId) => {
        try {
            let res = await axios.post(`${BackendUrl}/api/v1/tools/payment/status`, { orderId })
            const status = res.data?.data?.order_status

            switch (status) {
                case "PAID":
                    toast.success("Payment Successful");
                    setFormData({ name: "", email: "", phone: "", amount: "" });
                    break;

                case "ACTIVE":
                    toast.warn("Payment not completed. Order is still active.");
                    break;

                case "EXPIRED":
                    toast.error("Payment expired. Please try again.");
                    break;

                case "TERMINATED":
                    toast.error("Payment session terminated. Please initiate a new payment.");
                    break;

                case "TERMINATION_REQUESTED":
                    toast.info("Payment termination in process. Please wait or try again later.");
                    break;

                default:
                    toast.error("❓ Unknown payment status. Please contact support.");
                    break;
            }

            if (status === "PAID") {
                setTimeout(() => {
                    navigate("/")
                }, 5000);
            }
            else {
                setFormData({ name: "", email: "", phone: "", amount: "" });
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await getSessionId()
        if (!data) {
            return
        }

        let checkoutOptions = {
            paymentSessionId: data.paymentSessionId,
            redirectTarget: "_modal",
        }
        cashfree.checkout(checkoutOptions).then((res) => {
            console.log("payment initialized")
            verifyPayment(data.orderId)
        })
    };

    return (
        <section className="payment-form">
            <ToastContainer />
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