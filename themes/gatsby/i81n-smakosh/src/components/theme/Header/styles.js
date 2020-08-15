import styled from 'styled-components'

export const StyledHeader = styled.div`
    background: #5437ff;
`

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;
    align-items: center;
`

export const Navegador = styled.ul`
    &#menu
    {
        background: #333333;
        box-shadow: 0 -1px rgba(0, 0, 0, .5) inset;
        color: #eeeeee;
        height: 3em;
        margin: 0;
        padding: 0 10px;
        position: fixed;
        top: 0;
        width: 100%;
    }

    &#menu > li
    {
        float: left;
        list-style-type: none;
        position: relative;
    }
`

export const Label = styled.label`
    cursor: pointer;
    display: block;
    line-height: 3em;
    padding: 0 18px 0 12px;
    position: relative;
    transition: background .3s;

    &:after
    {
        border-bottom: 0 solid rgba(255, 255, 255, .5);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid rgba(255, 255, 255, .5);
        content: "";
        display: block;
        height: 0;
        position: absolute;
        right: 5px;
        top: 50%;
        transition: border-bottom .1s, border-top .1s .1s;
        width: 0;
    }

    &:hover
    {
        background: rgba(0, 0, 0, .3);
    }
`

export const Submenu = styled.ul`
    &.submenu
    {
        background: #444444;
        box-shadow: 0 0 1px rgba(0, 0, 0, .3);
        list-style-type: none;
        max-height: 0;
        min-width: 100%;
        overflow: hidden;
        padding: 0;
        position: absolute;
        transition: max-height .5s ease-out;
    }

    &.submenu li a
    {
        box-shadow: 0 -1px rgba(0, 0, 0, .5) inset;
        color: #dddddd;
        display: block;
        padding: 12px;
        text-decoration: none;
        transition: background .3s;
        white-space: nowrap;
    }

    &.submenu li a:hover
    {
        background: rgba(0, 0, 0, .3);
    }
`

export const Input = styled.input`
    display: none;

    &:checked ~ ${Label}
    {
        background: rgba(0, 0, 0, .3);
    }

    &:checked ~ ${Label}:after
    {
        border-bottom: 4px solid rgba(255, 255, 255, .5);
        border-top: 0 solid rgba(255, 255, 255, .5);
        transition: border-top .1s, border-bottom .1s .1s;
    }

    &:checked ~ ${Submenu}
    {
        max-height: 300px;
        transition: max-height .5s ease-in;
    }
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    a 
    {
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        margin: 0 1rem;
        outline: none;
    }
`

export const Logo = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    outline: none;
`
