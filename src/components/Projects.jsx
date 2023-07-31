import { Link } from "react-router-dom";
import { useState } from "react";
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
                                <ScreenShot src={'/assets/hangmanScreenshot.png'} alt={'hangman screenshot'} />
                            </ImageWrapper>
                            <ProjectTitles>Hangman</ProjectTitles>
                            <TextContent>Try your best to not hang this man</TextContent>
                        </Link>
                        <RedirectButton 
                            onClick={useRedirect('https://cookie-clicker-seven.vercel.app')} >
                                <span className="fa-solid fa-arrow-up-right-from-square fa-xl" />
                        </RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://cookie-clicker-seven.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'/assets/cookieClickerScreenshot.png'} alt={'cookie clicker screenshot'} />
                            </ImageWrapper>
                            <ProjectTitles>Cookie Clicker</ProjectTitles>
                            <TextContent>An idle cookie clicker</TextContent>
                        </Link>
                        <RedirectButton
                            onClick={useRedirect('https://cookie-clicker-seven.vercel.app')} >
                                <span className="fa-solid fa-arrow-up-right-from-square fa-xl" />
                        </RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://project-js-nyan-cat-bay.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'/assets/nyanCatScreenshot.png'} alt={'dodging game screenshot'} />
                            </ImageWrapper>
                            <ProjectTitles>Dodging Game</ProjectTitles>
                            <TextContent>Dodge Klingon Warbirds as a bust of TV's Lt Comm Data</TextContent>
                        </Link>
                        <RedirectButton
                            onClick={useRedirect('https://cookie-clicker-seven.vercel.app')} >
                                <span className="fa-solid fa-arrow-up-right-from-square fa-xl" />
                        </RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://react-state-p2-psi.vercel.app')} >
                            <ImageWrapper>
                                <ScreenShot src={'/assets/typeheadScreenshot.png'} alt={'typehead screenshot'} />
                            </ImageWrapper>
                            <ProjectTitles>Typehead</ProjectTitles>
                            <TextContent>A typehead sample</TextContent>
                        </Link>
                        <RedirectButton
                            onClick={useRedirect('https://cookie-clicker-seven.vercel.app')} >
                                <span className="fa-solid fa-arrow-up-right-from-square fa-xl" />
                        </RedirectButton>
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
    padding: 5vh 0 30px;
`

const ImageWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    z-index: -1;
`

const SectionHead = styled.h1`
    font-size: 4.5rem;
    color: var(--tertiary-accent-color);
    text-align: end;
`

const LineContainer = styled.div`
    max-width: 600px;
    width: 80%;
    margin: 5px;
`

const Line = styled.hr`
    position: absolute;
    right: 39.5%;
    border: 1px solid var(--secondary-accent-color);
    width: 56.5%;
    margin: 5px 0 5px;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-top: 5%;
`

const ProjectTitles = styled.h1`
    font-weight: 400;
    font-size: 3rem;
    color: var(--tertiary-accent-color);
    text-align: end;
    margin: 1rem 0 5px;
`

const Project = styled.div`
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    margin: 10px;
    border: 1px solid var(--dark-secondary-color);
    box-shadow: 0 0 30px var(--dark-primary-color);
    border-radius: 5px;
    background-color: var(--dark-primary-color);
`

const ScreenShot = styled.img`
    position: relative;
    width: 500px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.3s all ease-out;
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
    width: 75px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: var(--accent-color);
    transition: 0.3s all ease;

    &:hover {
        color: var(--secondary-accent-color);
    }
`

export default Projects;