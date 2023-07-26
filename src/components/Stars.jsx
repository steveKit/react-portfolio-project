import styled from "styled-components"

const Stars = ({ size, top, left }) => {
    console.log("size");
    return (
        <>
            <h1>test</h1>
            <Star size={size} top={top} left={left} />
        </>
        
    )
};

// const Wrapper = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background-color: black;
//     /* background: linear-gradient(
//         to right,
//         white 1%,
//         black 5%,
//         black 95%,
//         white 99%,
//     ); */
//     overflow: hidden;
// `

const Star = styled.div`
    height: ${({ size}) => size}px; 
    width: ${({ size}) => size}px;;
    border-radius: 50%;
    position: absolute;
    left: ${({ left }) => left}px;
    top: ${({ top }) => top}px;
    background-color: white;
    border: none;
`

export default Stars;