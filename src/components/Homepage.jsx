import styled from "styled-components"

const Homepage = () => {
    
    return (
        
        <Wrapper>
            <GradientOverlay />
            <TextContainer>
                <CutoutText>STEVE K</CutoutText>
            </TextContainer>
            <DarkTextContainer>
                <TextContent>Because the web won't develop itself</TextContent>
            </DarkTextContainer>
            
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 94vh;
    width: 100vw;
    background-size: cover;
    background-image: url('src/assets/portfolioPhoto.jpg');
    z-index: -2;
`

const TextContent = styled.p`
    font-size: 3.75rem;
    color: #f8f9ec;
    text-align: center;
    z-index: 5;
`

const CutoutText = styled.h1`
    width: fit-content;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 15em;
    transform: scale(0.75, 1);
    margin: 0;
    padding: 0;
`

const TextContainer = styled.div`
    position: absolute;
    top:8%;
    left: 1%;
    opacity: 1;
    width: 40%;
    height: 25%;
    background-color: #f8f9ec;
    mix-blend-mode: screen;
`

const DarkTextContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top:33%;
    left: 1%;
    opacity: 0.9;
    width: 40%;
    height: 25%;
    background-color: #2b3038;
    text-align: center;
    opacity: 0.5;
`

const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 94%;
    top: 6vh;
    background-image: linear-gradient(
        to bottom right,
        rgba(254, 194, 82, 0.60),
        rgba(254, 74, 49, 0.60)
    );
    z-index: 0;
`

export default Homepage;