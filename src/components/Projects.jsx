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
                <Line />
                <ProjectsWrapper>
                    <Project>
                        <Link onClick={() => handleOpenPopup('https://react-state-p1-ten.vercel.app')} >
                            <ScreenShot src={'../src/assets/hangmanScreenshot.png'} alt={'hangman screenshot'} />
                            <SectionHead>Hangman</SectionHead>
                            <TextContent></TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://react-state-p1-ten.vercel.app')} >External Link</RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://cookie-clicker-seven.vercel.app')} >
                            <ScreenShot src={'../src/assets/cookieClickerScreenshot.png'} alt={'cookie clicker screenshot'} />
                            <SectionHead>Cookie Clicker</SectionHead>
                            <TextContent></TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://cookie-clicker-seven.vercel.app')} >External Link</RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://project-js-nyan-cat-bay.vercel.app')} >
                            <ScreenShot src={'../src/assets/nyanCatScreenshot.png'} alt={'dodging game screenshot'} />
                            <SectionHead>Dodging Game</SectionHead>
                            <TextContent></TextContent>
                        </Link>
                        <RedirectButton onClick={useRedirect('https://project-js-nyan-cat-bay.vercel.app')} >External Link</RedirectButton>
                    </Project>

                    <Project>
                        <Link onClick={() => handleOpenPopup('https://react-state-p2-psi.vercel.app')} >
                            <ScreenShot src={'../src/assets/typeheadScreenshot.png'} alt={'typehead screenshot'} />
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
    background: linear-gradient(#181b1f, #414344);
    padding-top: 25px;
`

const SectionHead = styled.h1`
    font-size: 3rem;
    color: #9ba5a1;
    text-align: end;
`

const Line = styled.hr`
    border: 1px solid #b85d3f;
    width: 80vw;
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
    margin: 5px;
`

const Overlay = styled.div`

`

const ScreenShot = styled.img`
    width: 500px;
    height: auto;
`

const TextContent = styled.p`
    font-size: 1rem;
    color: #bec0c2;
    text-align: end;
    margin: 1rem;
`

const RedirectButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #bec0c2;
    z-index: 5;
`

export default Projects;