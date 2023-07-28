import styled from "styled-components"

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
                    <Photo />
                </PersonalWrapper>
            </SectionWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    /* background-color: #393D47; */
    background: linear-gradient(#181b1f, #414344);
`

const PersonalWrapper = styled.div`
`

const Photo = styled.img`

`

const TechList = styled.ul`
    text-align: end;
`

const ListItem = styled.li`
    color: #a6bbb5;
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

const Line = styled.hr`
    width: 66vw;
    
`

export default About;