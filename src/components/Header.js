import React from "react";
import { headerData } from '../data/data'
import styled from 'styled-components'
import { brandPallet } from "../data/data";

const StyledHeader = styled.header`

& nav {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    height: 10vh;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
        background-image: url('${headerData.logoImg}');
        height: 8vh;
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        width: 25%;
        margin-left: 3%;
        opacity: .75;
    }
    
    & .links {
        width: 50%;
        display: flex;
        justify-content: space-evenly;

        & a {
            text-decoration: none;
            letter-spacing: 3px;
            color: #4f4f4f;
            font-family: ${brandPallet.primaryFont};
            
            &:hover {
                color: ${brandPallet.primaryBackgroundColor};
            }
        }        
    }
}

`

function Header() {

    return (
        <StyledHeader>
            <nav>
                <div className="logo">
                </div>
                <div className="links">
                    {headerData.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </div>
            </nav>
        </StyledHeader>
    )
};

export default Header;