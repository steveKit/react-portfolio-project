import styled from "styled-components";

const Header = () => {

    return (
        
        <Wrapper>
            <TextContent>I'm here too!</TextContent>
        </Wrapper>
        
    )
}
const Wrapper = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    width: 100vw;
    max-width: 100vw;
    height: 6vh;
    background: #181b1f;
    opacity: 100;
`

const TextContent = styled.h1`
    font-family: 'Space Grotesk', sans-serif;
    color: #f8f9ec;
    opacity: 70%;
    margin-right: 20px;
`

export default Header;