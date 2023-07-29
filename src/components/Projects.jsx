import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";

import LinkPopup from "./LinkPopup";

const Projects = () => {
    const [ popupUrl, setPopupUrl ] = useState(null);
    
    const handleOpenPopup = (url) => {
        setPopupUrl(url);
    };

    const handleClosePopup = () => {
        setPopupUrl(null);
    };

    return (
        <Wrapper>
            {!popupUrl ? (
            <>
                
                <SectionHead>Projects</SectionHead>
                <LineContainer>
                <Line />
                </LineContainer>
                <ProjectsWrapper>
                    <Project>
                        <Link onClick={() => handleOpenPopup('https://react-state-p1-ten.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'../src/assets/hangmanScreenshot.png'} alt={'hangman screenshot'} />
                            </ImageWrapper>
                            <SectionHead>Hangman</SectionHead>
                            <TextContent>Please try your best to not hang this man</TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://react-state-p1-ten.vercel.app')} >External Link</RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://cookie-clicker-seven.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'../src/assets/cookieClickerScreenshot.png'} alt={'cookie clicker screenshot'} />
                            </ImageWrapper>
                            <SectionHead>Cookie Clicker</SectionHead>
                            <TextContent>An idle cookie clicker</TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://cookie-clicker-seven.vercel.app')} >External Link</RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://project-js-nyan-cat-bay.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'../src/assets/nyanCatScreenshot.png'} alt={'dodging game screenshot'} />
                            </ImageWrapper>
                            <SectionHead>Dodging Game</SectionHead>
                            <TextContent></TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://project-js-nyan-cat-bay.vercel.app')} >External Link</RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://react-state-p2-psi.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'../src/assets/typeheadScreenshot.png'} alt={'typehead screenshot'} />
                            </ImageWrapper>
                            <SectionHead>Typehead</SectionHead>
                            <TextContent></TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://react-state-p2-psi.vercel.app')}>External Link</RedirectButton>
                    </Project>
                </ProjectsWrapper>
            </>
            ) : (
                <LinkPopup url={popupUrl} onClose={handleClosePopup} />
            )}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    min-height: 94vh;
    height: fit-content;
    max-width: 100vw;
    width: auto;
    background: linear-gradient(var(--dark-primary-color), var(--dark-secondary-color));
    padding: 10vh 0 10vh;
`

const ImageWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    z-index: -1;
`

const LineContainer = styled.div`
    max-width: 600px;
    width: 80%;
    margin: 5px;
`

const SectionHead = styled.h1`
    font-size: 3rem;
    color: var(--tertiary-accent-color);
    text-align: end;
`

const Line = styled.hr`
    position: relative;
    left: -100%;
    border: 1px solid var(--secondary-accent-color);
    width: 165%;
    margin: 8px 0 5px;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-top: 5%;
`

const Project = styled.div`
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    margin: 10px;
    border-radius: 5px;
    background-color: var(--dark-primary-color);
`

const ScreenShot = styled.img`
    position: relative;
    width: 500px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.5s all ease-out;
    z-index: 0;

    &:hover {
        z-index: 10;
        transform: scale(1.5, 1.5);
    }
`

const TextContent = styled.p`
    font-size: 1rem;
    color: var(--secondary-color);
    text-align: end;
    margin: 1rem;
`

const RedirectButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: var(--accent-color);
`

export default Projects;