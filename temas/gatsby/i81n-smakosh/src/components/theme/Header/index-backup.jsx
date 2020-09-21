import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Context, Container } from '../../common'
import SelectLanguage from './SelectLanguage'
import { Navbar, Links, Logo } from './styles'
import {Navegador, Input, Label, Submenu, StyledHeader } from './styles'

const Header = () => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <StyledHeader>
        <Navegador id="menu">
          <li>
            <Links>
              {/* ... */}
              <SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
            </Links>
          </li>
        </Navegador>
      </StyledHeader>
    )}
  </Context.Consumer>
)

export default Header
