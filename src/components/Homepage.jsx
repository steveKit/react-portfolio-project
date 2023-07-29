import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Homepage = () => {
    const [ showCreative, setShowCreative ] = useState(false);
    const [ showSteve, setShowSteve ] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShowSteve(true);
        }, 1000);

        setTimeout(() => {
            setShowCreative(true);
        }, 3000);
    }, []);

    return (
        
        <Wrapper>
            <TextWrapper className={'visible'} >
                <TextSteve className={`fade-in ${showSteve ? 'visible' : 'hidden'}`} >STEVE <K className={"visible"} >K</K></TextSteve>
                <TextCreative className={`fade-in ${showCreative ? 'visible' : 'hidden'}`} >Creative Coding</TextCreative>
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
    justify-content: center;
    align-items: center;
    max-height: 94vh;
    height: 94vh;
    max-width: 100vw;
    width: 100vw;
    background: linear-gradient(var(--dark-primary-color), var(--dark-secondary-color));
    padding: 0 0 10vh;
`

const TextWrapper = styled.div`
    display: flex;
    width: 66vw;
    height: 60vh;
    border-radius: 15px;
    border: 1px solid var(--accent-color);
    /* box-shadow: 2px 2px 20px var(--dark-secondary-color); */
    opacity: 1;
    animation: all 4s ease-in;

    &.visible {
        animation: ${fadeIn} 4s ease-in;
        opacity: 1;
}
`

const K = styled.span`
    font-weight: 700;
    font-size: 18vw;
    color: var(--secondary-accent-color);
`

const TextSteve = styled.h1`
    position: absolute;
    left: 18%;
    top: 16%;
    font-weight: 500;
    font-size: 16vw;
    color: var(--primary-color);
    opacity: 0;

    &.visible {
        animation: ${fadeIn} 2.5s ease;
        opacity: 1;
    }
`

const TextCreative = styled.h1`
    position: absolute;
    left: 30%;
    top: 50%;
    font-weight: 400;
    font-size: 6vw;
    color: #eaeff5;
    opacity: 0;
    z-index: 10;

    &.visible {
        animation: ${fadeIn} 2.5s ease;
        opacity: 1;
    }
`

export default Homepage;