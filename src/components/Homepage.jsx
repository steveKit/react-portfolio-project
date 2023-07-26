import { useEffect } from "react";
import styled from "styled-components"

import Stars from "./Stars";

const Homepage = () => {
    const littleStars = [];
    const mediumStars = [];
    const largeStars = [];

    const randomPlacement = Math.random() * window.innerWidth;

    const starCreator = (num, array) => {
        const star = "*";
        for (let i = 0; i < num; i++) {
            array.push(star);
        }
    };

    useEffect(() => {

        starCreator((Math.random() * 20 + 80), littleStars );
        starCreator((Math.random() * 20 + 30), mediumStars);
        starCreator((Math.random() * 10 + 10), largeStars);

    }, [])

    useEffect(() => {
        console.log(littleStars);
    }, []);
    
    return (
        <>
        {!littleStars ||
            !mediumStars ||
            !largeStars === 0 
        ? (
            <></>
        ) : (
            <Wrapper>
                {littleStars.map((star, index) => {
                    const size = 2;
                    const left = randomPlacement;
                    const top = randomPlacement;

                    return (
                        <Stars key={`little${index}`} size={size} top={top} left={left} />
                    )    
                })}
                {mediumStars.map((star, index) => {
                    const size = 6;
                    const left = randomPlacement;
                    const top = randomPlacement;

                    return (
                        <Stars key={`medium${index}`} size={size} top={top} left={left} />
                    )    
                })}  
                {largeStars.map((star, index) => {
                    const size = 10;
                    const left = randomPlacement;
                    const top = randomPlacement;

                    return (
                        <Stars key={`large${index}`} size={size} top={top} left={left} />
                    )    
                })}      
            </Wrapper>
        )}
    </>
    )
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    overflow: hidden;
`

const TextContent = styled.h1`
    font-family: 'Space Grotesk', sans-serif;
`

export default Homepage;