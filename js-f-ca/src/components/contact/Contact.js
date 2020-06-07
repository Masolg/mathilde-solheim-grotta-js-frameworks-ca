import React, {useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
	firstName: yup
            .string()
            .min(2, "Minimum 2 characters required")
            .required("First name is required"),
	lastName: yup
            .string()
            .min(2, "Minimum 2 characters required")
            .required("Last name is required"),
	email: yup
            .string()
	        .email("Please enter a valid email")
	        .required("Email is required"),
	msg: yup
            .string()
	        .min(10, "Minimum 10 characters required")
            .required("Messsage is required")
});


function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});
    const [valMessage, setValMessage] = useState ("");

	function onSubmit(data) {
		console.log("data", data);
        setValMessage("Your message has been sent.")
	}

	return (
        <>
            <p style={{color: "green"}}>{valMessage}</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                    {errors.firstName && errors.firstName.message}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                    {errors.lastName && errors.lastName.message}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" placeholder="Enter your email" ref={register} />
                    {errors.email && errors.email.message}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="msg" placeholder="Enter a message" ref={register} />
                    {errors.msg && errors.msg.message}
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </>
	);
}

export default Contact;
