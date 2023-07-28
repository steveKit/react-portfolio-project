import styled from "styled-components";

const Header = () => {

    return (
        
        <Wrapper>
            <>
            <TextContent>Steve Kittredge</TextContent>
            </>
            <>
            <TextContent>I'm here too!</TextContent>
            </>
        </Wrapper>
        
    )
}
const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    width: auto;
    max-width: 100vw;
    height: 6vh;
    background: #181b1f;
    z-index: 1;
`

const TextContent = styled.h1`
    color: #bec0c2;
    opacity: 90%;
    margin: 0 20px;
`

export default Header;