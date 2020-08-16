/** @jsx jsx */

import { jsx, Styled, useColorMode } from 'theme-ui'
import {Context} from '../../common'
import SelectLanguage from './SelectLanguage'
import {Links} from './styles'
import {Navegador, StyledHeader} from './styles'
import ButtonUI from '../../theme-ui/button-ui'

const themes = ['deep', 'funk', 'future', 'swiss']
const modes = ['default', 'dark']

const getThemeName = (theme) => 
{
  switch (theme)
  {
    case 'deep':
      return 'Deep'
    case 'funk':
      return 'Funk'
    case 'future':
      return 'Future'
    case 'swiss':
      return 'Swiss'
    default:
        return theme
  }
}

const getModeName = (mode) => 
{
  switch (mode)
  {
    case 'dark':
      return (<span role="img" aria-label="moon">🌕 </span>)
    case 'default':
      return (<span role="img" aria-label="sun">☀️ </span>)
    default:
      return mode
  }
}

const [theme, setTheme] = useColorMode();
const [mode, setMode] = useColorMode();

function cycleTheme (e) {
  const i = themes.indexOf(theme)
  const next = themes[(i + 1) % themes.length]
  setTheme(next)
}

function cycleMode (e) {
  const i = modes.indexOf(mode)
  const next = modes[(i + 1) % modes.length]
  setMode(next)
}

function Header () {
  return (

    <Styled.root>
      <Context.Consumer>
        {({ toggleLanguage, lang }) => (
          <StyledHeader>
            <Navegador id="menu">
              <li>
                <ButtonUI
                  sx={{
                    ml: 2,
                  }}
                  onClick={cycleTheme}>
                  <span role="img" aria-label="theme">🎨 </span>
                  {getThemeName(theme)}
                </ButtonUI>
                <ButtonUI
                  sx={{
                    ml: 2,
                  }}
                  onClick={cycleMode}>
                  {getModeName(mode)}
                </ButtonUI>
                <Links>
                  <SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
                </Links>
              </li>
            </Navegador>
          </StyledHeader>
        )}
      </Context.Consumer>
    </Styled.root>
  )
}

export default Header
