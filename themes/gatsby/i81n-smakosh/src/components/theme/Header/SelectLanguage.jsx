import React from 'react'
import { compose, withStateHandlers } from 'recompose';
import {Input, Label, Submenu } from './styles'

const SelectLanguage = ({ selectLanguage, lang }) => (
  <li>
      <Input id="languages" type="checkbox" name="menu" />
      <Label for="languages">Languages</Label>
      <Submenu className="submenu">
        <li onClick={e => selectLanguage("ar")}><a value={lang}>Ø¹Ø±Ø¨Ù</a></li>
        <li onClick={e => selectLanguage("de")}><a value={lang}>Deutsch</a></li>
        <li onClick={e => selectLanguage("en")}><a value={lang}>English</a></li>
        <li onClick={e => selectLanguage("es")}><a value={lang}>EspaÃ±ol</a></li>
        <li onClick={e => selectLanguage("pt")}><a value={lang}>PortuguÃªs</a></li>
      </Submenu>
  </li>

)

const enhance = compose(
	withStateHandlers(
		props => ({ language: props.lang }),
		{
			selectLanguage: (values, { toggleLanguage }) => value => {
				toggleLanguage(value)
				return {
					language: value
				}
			}
		}
	)
)

export default enhance(SelectLanguage)
