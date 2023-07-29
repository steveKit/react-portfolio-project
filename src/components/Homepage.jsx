import styled from "styled-components";

const Homepage = () => {
    
    return (
        
        <Wrapper>
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

export default Homepage;