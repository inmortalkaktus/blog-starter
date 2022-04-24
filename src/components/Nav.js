import React from "react"
import { NavWrapper } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import { HiOutlineTranslate } from 'react-icons/hi'
import styled from "styled-components"
import { navbar } from "../translations/translations"

export const Nav = ({ lang }) => {
    return (
        <NavWrapper>
            <a href={`/${lang}`} style={{marginLeft: '1.5em'}}>
                <StaticImage src={ "../images/logo.svg" } alt="Web Logo" placeholder="blurred" width={50} height={50}/>
            </a>
            <EndWrapper>
                <Categories href='#all-categories'>
                    { navbar.categories[lang] }
                </Categories>
                <LanguageWrapper href='#countries'>
                    <LangIconWrapper>
                        <HiOutlineTranslate />
                    </LangIconWrapper>
                </LanguageWrapper>
            </EndWrapper>
        </NavWrapper>
    )
}

const EndWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Categories = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 .65em;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color ${props => props.theme.colors.main1};   
    background-color: ${props => props.theme.colors.light1};
    text-decoration: none;
    transition: all .25s ease;

    :hover {    
        background-color: ${props => props.theme.colors.main1};
        color ${props => props.theme.colors.light1};    
    }
`

const LanguageWrapper = styled.a`    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    background-color: ${props => props.theme.colors.light1};
    transition: all .25s ease;

    svg {
        font-size: 1.4rem;
        color ${props => props.theme.colors.main1};   
        transition: all .25s ease; 
    }

    :hover, :focus {    
        background-color: ${props => props.theme.colors.main1};

        svg {
            font-size: 1.4rem;
            color ${props => props.theme.colors.light1};    
        }
    }
`

const LangIconWrapper = styled.div`
    padding: 0 .65em;
    border-left: 1px solid ${props => props.theme.colors.gray3};
`