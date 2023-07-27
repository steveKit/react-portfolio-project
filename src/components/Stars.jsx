import { useEffect, useState } from "react";
import styled from "styled-components"

const Stars = () => {
    const randomSizeGenerator = ( Math.floor( Math.random() * 2 + 1 ) );
    const randomSize = randomSizeGenerator === 0 ? 10 : randomSizeGenerator;
    const [ randomLeft, setRandomLeft ] = useState(0);
    const [ randomTop, setRandomTop ] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setRandomLeft(Math.random() * (window.innerWidth));
            setRandomTop(Math.random() * (window.innerHeight));
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        
            <Star
                randomSize={randomSize}
                randomLeft={randomLeft}
                randomTop={randomTop}
            />
    
    )
};

// const Wrapper = styled.div`
//     width: 100vw;
//     height: 100vh;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     background-color: #393D47;
// `

const Star = styled.div`
    height: ${({ randomSize }) => randomSize }px;
    width: ${({ randomSize }) => randomSize }px;
    border-radius: 50%;
    position: absolute;
    left: ${({ randomLeft }) => randomLeft }px;
    top: ${({ randomTop }) => randomTop }px;
    background-color: #f8f9ec;
    box-shadow: inset 0 40px #f8f9ec;
    border: 1px solid #f8f9ec;
    opacity: 50%;
`

const TextContent = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    color: #f8f9ec;
    box-shadow: 0 0 10px #f8f9ec;
    z-index: 20;
`

export default Stars;