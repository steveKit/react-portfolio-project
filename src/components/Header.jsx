import styled from "styled-components";
import { Link } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";



const Header = () => {

    const [ showDropdown, setShowDropdown ] = useState();

    library.add(faPaperPlane, faGithub, faLinkedin, faCircleChevronDown);

    const toggleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    };

    return (
        
        <Wrapper>
            <DropdownButton onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faCircleChevronDown} size="xl" style={{color: "#6f8079",}} />
            </DropdownButton>
            <TextContent>Steve Kittredge</TextContent>
            {showDropdown && (
                <DropdownContent>
                    <DropdownLink to={"/"} onClick={toggleDropdown} >Home</DropdownLink>
                    <DropdownLink to={"/about"} onClick={toggleDropdown} >About</DropdownLink>
                    <DropdownLink to={"/projects"} onClick={toggleDropdown} >Projects</DropdownLink>
                    <DropdownLink to={"/contact"} onClick={toggleDropdown} >Contact</DropdownLink>
                </DropdownContent>
            )}
            
            <IconWrapper>
                <RedirectButton>
                    <Link to={'/contact'} ><FontAwesomeIcon icon="fa-solid fa-paper-plane" size="xl" style={{color: "#6f8079",}}/></Link>
                </RedirectButton>
                <RedirectButton onClick={useRedirect('https://www.linkedin.com/in/steve-kittredge-4ba386285/')}>
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#6f8079",}} />
                </RedirectButton>
                <RedirectButton onClick={useRedirect('https://github.com/steveKit')}>
                    <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#6f8079",}} />
                </RedirectButton>
            </IconWrapper>
        </Wrapper>
        
    )
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    width: auto;
    max-width: 100vw;
    height: 6vh;
    background: var(--dark-primary-color);
    z-index: 10;
    padding: 0 20px;
`

const DropdownButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: var(--tertiary-accent-color);
`

const DropdownContent = styled.div`
    position: absolute;
    top: 6%;
    left: 1%;
    background-color: var(--dark-primary-color);
    border: 1px solid var(--dark-secondary-color);
    border-radius: 5px;
    padding: 8px;
    z-index: 20;
`

const DropdownLink = styled(Link)`
    display: block;
    color: var(--accent-color);
    padding: 8px 16px;
    text-decoration: none;
    transition: 0.3s all ease;

    &:hover {
        background-color: var(--secondary-accent-color);
        color: var(--dark-primary-color);
    }
`

const TextContent = styled.h1`
    color: var(--accent-color);
    font-size: 1rem;
    opacity: 90%;
    margin: 0 20px;
`

const IconWrapper = styled.div`
    display: flex;
`

const RedirectButton = styled.button`
    background: transparent;
    padding-left: 15px;
    border: none;
    cursor: pointer;
`

export default Header;