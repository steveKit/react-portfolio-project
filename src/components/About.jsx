import styled from "styled-components";

const About = () => {

    return (
        <Wrapper>
            <SectionWrapper>
                <SectionHead>
                    About Me
                </SectionHead>
                <Line />
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
                        <Photo src="./src/assets/portfolioPhotoSmall.jpg"/>
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
    justify-content: center;
    align-items: center;
    max-height: 94vh;
    height: 94vh;
    max-width: 100vw;
    width: 100vw;
    background: linear-gradient(var(--dark-primary-color), var(--dark-secondary-color));
    padding-top: 25px;
    overflow: auto;
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
    position: absolute;
    left: 35%;
    top: 21%;
    width: fit-content;
    height: fit-content;
`

const PersonalWrapper = styled.div`
    margin-left: 15%;
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
    font-size: 1.2rem;
    color: #bec0c2;
    text-align: end;
    margin: 1rem;
    padding: 2px;
`

const Line = styled.hr`
    border: 1px solid #9ba5a1;
    width: 60vw;
`

export default About;