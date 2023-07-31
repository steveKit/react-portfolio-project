import styled from "styled-components";

const About = () => {

    return (
        <Wrapper>
            <SectionHead>About Me</SectionHead>
            <LineContainer>
                <Line />
            </LineContainer>
            <SectionWrapper>
                <PersonalWrapper>
                    <TextContent>
                        As a seasoned carpenter and cabinetmaker turned web developer, 
                        I bring a unique blend of craftsmanship and technical expertise to the digital world. 
                        With a keen eye for detail and a passion for problem-solving, 
                        I have seamlessly transitioned my project and time management skills from the workshop to the realm of web development. 
                        Navigating through strict timelines is second nature to me, 
                        ensuring that every project I embark upon is not only impeccably crafted but also delivered with precision and efficiency. 
                    </TextContent>
                    <TextContent>Here are a few technologies I work with:</TextContent>
                    <TechList>
                        <ListItem>JavaScript (ES6+)</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>HTML</ListItem>
                        <ListItem>CSS</ListItem>
                    </TechList>
                </PersonalWrapper>
                <PhotoWrapper>
                        <GradientOverlay />
                        <Photo src="assets/portfolioPhotoSmall.jpg"/>
                </PhotoWrapper>
            </SectionWrapper>
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
    min-height: 100%;
    max-height: 94vh;
    height: 94vh;
    max-width: 100vw;
    width: 100vw;
    background: linear-gradient(var(--dark-primary-color), var(--dark-secondary-color));
    padding: 5vh 0 10vh;
    overflow: auto;

    @media (max-width: 600px) {
        padding: 0 5px;
    }
`

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
    flex-wrap: wrap;
    max-width: 94vw;
    flex: 1;
    padding: 15px 25px;

    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`

const GradientOverlay = styled.div`
    position: absolute;
    width: 350px;
    height: 455px;
    border-radius: 5px;
    background-image: linear-gradient(
        to bottom right,
        rgba(254, 194, 82, 0.40),
        rgba(254, 74, 49, 0.40)
    );
    z-index: 1;
`

const PhotoWrapper = styled.div`
    width: fit-content;
    height: fit-content;
`

const PersonalWrapper = styled.div`
    width: 33%;
    min-width: 400px;
    margin-bottom: 25px;
`

const Photo = styled.img`
    width: 350px;
    height: 455px;
    object-fit: cover;
    border-radius: 5px;
`

const TechList = styled.ul`
    text-align: end;
`

const ListItem = styled.li`
    color: #a6bbb5;
    margin-right: 16px;
    padding: 3px;
`

const SectionHead = styled.h1`
    font-size: 4.5rem;
    color: var(--tertiary-accent-color);
    text-align: end;
    margin-bottom: 5px;
`

const TextContent = styled.p`
    font-size: 1.2rem;
    color: #bec0c2;
    text-align: end;
    margin: 1rem;
    padding: 2px;
`

const LineContainer = styled.div`
    max-width: 600px;
    width: 80%;
    margin: 5px;
`

const Line = styled.hr`
    position: absolute;
    right: 38%;
    border: 1px solid var(--secondary-accent-color);
    width: 58%;
    margin: 0 0 5px;
`


export default About;