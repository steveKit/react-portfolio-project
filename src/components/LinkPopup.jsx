import { useEffect, useState } from "react";
import styled from "styled-components";

const LinkPopup = ({ url, onClose}) => {
    const [ isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <Overlay className={!isLoading ? "popupOpen" : ""} >
            <PopupContent>
            <CloseButton onClick={onClose}>Close</CloseButton>
                {isLoading ? (
                    <TextContent>Loading...</TextContent>
                ) : (
                    <Iframe title="Link Popup" src={url}/>  
                )}
            </PopupContent>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.6s ease-out;

    &.popupOpen {
        opacity: 1;
    }
`

const PopupContent = styled.div`
    background: #4b5659;
    width: 80vw;
    height: 80vh;
    padding: 30px 55px;
    border: 1px solid #a6bbb5;
    border-radius: 5px;
    box-shadow: 0 0 10px #181b1f;
`

const CloseButton = styled.button`
    position: absolute;
    top: 9%;
    right: 10%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #181b1f;
    z-index: 5;
`

const Iframe = styled.iframe`
    margin-top: 40px;
    width: 100%;
    height: 90%;
    box-shadow: 0 0 50px #181b1f;
    border-radius: 5px;
`

const TextContent = styled.p`
    font-size: 1rem;
    color: #bec0c2;
    text-align: end;
    margin: 1rem;
`

export default LinkPopup;