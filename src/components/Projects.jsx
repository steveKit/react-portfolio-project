import styled from "styled-components"

const Projects = () => {

    return (
        <Wrapper>
            <SectionHead>Projects</SectionHead>
            <ProjectsWrapper>
                <Project>
                    <ScreenShot src={'../assets/hangmanScreenshot.png'}/>
                    <SectionHead>Hangman</SectionHead>
                    <TextContent></TextContent>
                </Project>
                <Project>
                    <ScreenShot />
                    <SectionHead>Cookie Clicker</SectionHead>
                    <TextContent></TextContent>
                </Project>
                <Project>
                    <ScreenShot />
                    <SectionHead>Dodging Game</SectionHead>
                    <TextContent></TextContent>
                </Project>
                <Project>
                    <ScreenShot />
                    <SectionHead>Typehead</SectionHead>
                    <TextContent></TextContent>
                </Project>
            </ProjectsWrapper>
        </Wrapper>
    )
};

const ScreenShot = styled.img`
    width: 250px;
    height: auto;
`

const Project = styled.div`
    

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#181b1f, #414344);
    padding-top: 25px;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const SectionHead = styled.h1`
    font-size: 3rem;
    color: #6f8079;
    text-align: end;
`

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    left: 6vw;
    width: 33vw;
    padding: 15px 25px;
`

const TextContent = styled.p`
    font-size: 1rem;
    color: #bec0c2;
    text-align: end;
    margin: 1rem;
`

export default Projects;