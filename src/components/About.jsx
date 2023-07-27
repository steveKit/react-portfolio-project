import styled from "styled-components"

const About = () => {

    return (
        <Wrapper>
            <Photo src={"../assets/20230726_215539.jpg"} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #181b1f;
    background: linear-gradient(#181b1f, #414344);
`

const Photo = styled.img`

`

export default About;