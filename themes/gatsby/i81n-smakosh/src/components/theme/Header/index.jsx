/** @jsx jsx */

import { jsx, Styled, useColorMode } from 'theme-ui'
import { Context } from '../../common'
import SelectLanguage from './SelectLanguage'
// import { Links } from './styles'
import { Navegador, Input, Label, Submenu, StyledHeader } from './styles'

function Header() 
{
  const themes = ['deep', 'funk', 'future', 'swiss'];
  const modes = ['default', 'dark'];
  const [mode, setMode, setTheme, theme] = useColorMode()

  // const listModes = modes.map((mode) => <li>{mode}</li>);
  
  return (

    <Styled.root>
      <Context.Consumer>
        {({ toggleLanguage, lang }) => (
          <StyledHeader>
            <Navegador id="menu">
              <li>
                  <SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
              </li>

              <li>
                <Input id="modes" type="checkbox" name="menu"/>
                <Label for="modes">Modes</Label>
                <Submenu className="submenu">
                  <li onClick={e => setMode("default")}> Light </li>
                  <li onClick={e => setMode("dark")}> Dark </li>
                </Submenu>
              </li>

              <li>
                <Input id="themes" type="checkbox" name="menu"/>
                <Label for="themes">Themes</Label>
                <Submenu className="submenu">
                  <li onClick={e => setTheme("deep")}> Deep </li>
                  <li onClick={e => setTheme("funk")}> Funk </li>
                  <li onClick={e => setTheme("future")}> Futuristic </li>
                  <li onClick={e => setTheme("swiss")}> Swiss </li>
                </Submenu>
              </li>
              
            </Navegador>
          </StyledHeader>
        )}
      </Context.Consumer>
    </Styled.root>
  )
}

export default Header