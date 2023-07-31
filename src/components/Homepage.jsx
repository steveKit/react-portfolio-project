import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Homepage = () => {
    const [ showHi, setShowHi ] = useState(false);
    const [ showMyNameIs, setShowMyNameIs ] = useState(false);
    const [ showName, setShowName ] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
    const [ showLinks, setShowLinks ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowHi(true);
        }, 500);
    
        setTimeout(() => {
            setShowMyNameIs(true);
        }, 1000);
    
        setTimeout(() => {
            setShowName(true);
        }, 2000);

        setTimeout(() => {
            setShowDescription(true);
        }, 4000);

        setTimeout(() => {
            setShowLinks(true);
        }, 5250);

    }, []);


    return (
        
        <Wrapper>
            <TextWrapper>
                <FadeInText className={`hiText ${showHi ? "visible" : "hidden"}`}>
                    Hi.
                    <FadeInSpan className={`${showMyNameIs ? "visible" : "hidden"}`}>
                        I'm Steve
                    </FadeInSpan>
                </FadeInText>
                <FadeInText className={`nameText ${showName ? "visible" : "hidden"}`}>
                    Kittredge
                </FadeInText>
                <FadeInText className={`buildThingsText ${showDescription ? "visible" : "hidden"}`}>
                    Fullstack web developer
                </FadeInText>
                
                <LinksWrapper>
                    <Link to={"/about"} >
                        <LinkSpan className={`${showLinks ? "visible" : "hidden"}`}>
                            About
                        </LinkSpan>
                    </Link>
                    <Link to={"/contact"} >
                        <LinkSpan className={`${showLinks ? "visible" : "hidden"}`}>
                            Contact
                        </LinkSpan>
                    </Link>
                    <Link to={"/projects"} >
                        <LinkSpan className={`${showLinks ? "visible" : "hidden"}`}>
                            Projects
                        </LinkSpan>
                    </Link>
                </LinksWrapper>
            </TextWrapper>
        </Wrapper>
    )
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

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

    @media (max-width: 600px) {
        padding: 0 5px;
    }
`

const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 66vw;
    height: 60vh;
    opacity: 1;

    @media (max-width: 600px) {
        width: 90%;
    }
`

const FadeInText = styled.h1`
    font-weight: 500;
    font-size: 4rem;
    color: var(--primary-color);
    opacity: 0;

    &.visible {
        animation: ${fadeIn} 4s ease;
        opacity: 1;
    }

    &.nameText {
        font-size: 9rem;
    }

    &.hiText {
        color: var(--secondary-accent-color);
        font-size: 7rem;
        transition: 10s ease;
    }

    &.buildThingsText {
        color: var(--accent-color);
        font-size: 3.4rem;
        margin-top: 2%;
    }

    @media (max-width: 600px) {
        font: 3rem;
    }
`

const FadeInSpan = styled.span`
    margin-left: 1rem;
    font-weight: 500;
    font-size: 7rem;
    color: var(--primary-color);
    opacity: 0;

    &.visible {
        animation: ${fadeIn} 2s ease-in;
        opacity: 1;
    }

    @media (max-width: 600px) {
        font-size: 3rem;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    margin-top: 2rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const LinkSpan = styled.button`
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
    opacity: 0;

    &.visible {
        animation: ${fadeIn} 2s ease;
        opacity: 1;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`


export default Homepage;