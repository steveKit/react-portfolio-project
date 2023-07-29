import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Homepage = () => {
    const [ showCreative, setShowCreative ] = useState(false);
    const [ showCoding, setShowCoding ] = useState(false);
    const [ showSteve, setShowSteve ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowCreative(true);
        }, 3000);

        setTimeout(() => {
            setShowCoding(true);
        }, 5500);

        setTimeout(() => {
            setShowSteve(true);
        }, 8000);
    }, []);

    return (
        
        <Wrapper>
            <TextWrapper className={'visible'} >
                <TitleContent className={`fade-in ${showSteve ? 'visible' : 'hidden'}`} >Steve</TitleContent>
                <K className={`"visible"  ${showCoding ? 'movedLeft' : ''} ${showCreative ? 'movedLeft' : ''} ${showSteve ? 'movedRight' : ''}`} >
                    K
                </K>
                <TitleContent className={`fade-in ${showCreative ? 'visible' : 'hidden'}`} >reative</TitleContent>
                <TitleContent className={`fade-in ${showCoding ? 'visible' : 'hidden'}`} >oding</TitleContent>
            </TextWrapper>
        </Wrapper>
    )
};

const fadeIn = keyframes`
    from {
        position: absolute;
        opacity: 0;
    }
    to {
        position: static;
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        position: static;
        opacity: 1;
    }
    to {
        position: absolute;
        opacity: 0
    }
`

const moveLeft = keyframes`
    from {
        left: 0;
    }
    to {
        left: 5%;
    }
`

const moveRight = keyframes`
    from {
        right: 0;
    }
    to {
        right: 5%;
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
    opacity: 0;
    animation: all 4s ease-in;
    opacity: 0;

    &.visible {
        animation: ${fadeIn} 4s ease-in;
        opacity: 1;
}
`

const K = styled.h1`
    position: relative;
    font-weight: 700;
    font-size: 24rem;
    color: var(--secondary-accent-color);
    transition: all 1s ease;

    &.movedLeft {
        animation: ${moveLeft} 1s ease;
    }

    &.movedRight {
        animation: ${moveRight} 1s ease;
    }
`

const TitleContent = styled.h1`
    position: absolute;
    font-weight: 400;
    font-size: 16rem;
    color: var(--tertiary-accent-color);
    opacity: 0;

    &.visible {
        animation: ${fadeIn} 2.5s ease;
    }

    &.hidden {
        animation: ${fadeOut} 1s ease;
    }
`

export default Homepage;