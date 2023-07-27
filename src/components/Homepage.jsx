import portfolioPhoto from '../assets/portfolioPhoto.jpg'
import styled from "styled-components"

const Homepage = () => {
    
    return (
        
        <Wrapper>
            <GradientOverlay />
            <TextContainer>
            </TextContainer>
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
    background-image: url(${portfolioPhoto});
`

const TextContent = styled.h1`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 4rem;
    color: black;
    text-align: center;
    z-index: 20;
`

const TextContainer = styled.div`
    opacity: 50;
    width: 95%;
    height: 95%;
`

const GradientOverlay = styled.div`
    opacity: 30;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#fec252, #fe4a31);
`

export default Homepage;