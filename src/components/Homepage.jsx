import { useEffect } from "react";
import styled from "styled-components"

import Stars from "./Stars";

const Homepage = () => {

    const littleStars = [];

    const starCreator = (num, array) => {
        const star = "";
        for (let i = 0; i < num; i++) {
            array.push(star);
        }
    };

    useEffect(() => {
        console.log(littleStars, "little");
    }, [littleStars]);

    starCreator((Math.random() * 100 + 500), littleStars );
    
    return (
        
        <Wrapper>
                {littleStars.map((star, index) => {
                
                    return (
                        <Stars key={`little${index}`} />
                    )    
                })}
            {/* <TextContainer>
                <TextContent>Steve Kittredge</TextContent>
            </TextContainer> */}
            
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



const TextContent = styled.h1`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 4rem;
    color: #f8f9ec;
    text-align: center;
    z-index: 20;
`

const TextContainer = styled.div`
    opacity: 100;
    border-radius: 20px;
    width: 60%;
    height: 50%;
    z-index: 10;
`

const Planets = styled.img`

`

export default Homepage;