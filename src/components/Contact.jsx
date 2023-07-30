import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contact = () => {
    const [ formData, setFormData ] = useState({});

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        window.alert(JSON.stringify(formData));

        // adding this for the sake of completeness. Don't understand the backend yet :(

        // fetch('/email-endpoint', {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json', 
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     window.alert(data);
        // })
        // .catch((error) => {
        //     window.alert('Error sending email', error);
        // })
    };

    return (
        <Wrapper>
            <SectionHead>Let's get in touch</SectionHead>
            
            <Form id="contact" onSubmit={handleSubmit} >
            <Line />
            <TextWrapper>
                <TextContent>because the web won't develop itself</TextContent>
            </TextWrapper>
                <Section>
                    <label htmlFor="fname" />
                    <InputField type="text" id="fname" form="contact" onChange={(e) => handleChange(e.target.id, e.target.value)} placeholder="First name" />
                    <label htmlFor="lname" />
                    <InputField type="text" id="lname" form="contact" onChange={(e) => handleChange(e.target.id, e.target.value)} placeholder="Last name" />
                </Section>
                <Section>
                    <label htmlFor="email" />
                    <InputField type="email" id="email" form="contact" onChange={(e) => handleChange(e.target.id, e.target.value)} placeholder="Email address" />
                </Section>
                <Section>
                    <label htmlFor="body" />
                    <MessageBody type="text" id="body" form="contact" onChange={(e) => handleChange(e.target.id, e.target.value)} placeholder="Write your message..." />
                </Section>
                <Button type="reset" form="contact" value="Clear" />
                <Button type="submit" form="contact" value="Submit" />
            </Form>
            
                <TextContent>email me directly at: <Link>not_yet_real@email.com</Link></TextContent>
            
        </Wrapper>
    )
};

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 6vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    max-height: 94vh;
    height: 94vh;
    max-width: 100vw;
    width: 100vw;
    background: linear-gradient(var(--dark-primary-color), var(--dark-secondary-color));
    padding: 5vh 0 30px;
    overflow: auto;
`

const TextWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SectionHead = styled.h1`
    font-weight: 400;
    font-size: 4.5rem;
    color: var(--tertiary-accent-color);
    text-align: end;
`

const TextContent = styled.p`
    font-weight: 400;
    font-style: italic;
    font-size: 1.2rem;
    color: var(--primary-color);
    text-align: end;
    margin: 12px 0 16px;
`

const Line = styled.hr`
    position: absolute;
    right: 29.5%;
    border: 1px solid var(--secondary-accent-color);
    width: 66.5%;
    margin: 5px 0 5px;
`

const Form = styled.form`
    max-width: 600px;
    width: 80%;
    margin: 5px;
`

const Section = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const InputField = styled.input`
    width: 100%;
    background-color: var(--secondary-color);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    border: 2px solid #6f8079;
    color: #34383b;
    padding: 5px 15px;
    margin: 5px;
    border-radius: 5px;
    outline: none;
`

const MessageBody = styled.textarea`
    width: 100%;
    height: 40vh;
    background-color: var(--secondary-color);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    border: 2px solid var(--primary-color);
    color: var(--dark-secondary-color);
    padding: 5px 15px;
    margin: 5px;
    border-radius: 5px;
    outline: none;
`

const Button = styled.input`
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer;
    font-size: 1.2rem;
    background: none;
    border: 2px solid var(--accent-color);
    color: var(--tertiary-accent-color);
    width: 150px;
    padding: 5px 15px;
    margin: 1rem 5px 0;
    border-radius: 5px;
`

export default Contact;