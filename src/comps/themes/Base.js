import light from './Light'
import dark from './Dark'

const themes = {
  light,
  dark,
}

export default function getTheme(theme) {
  return themes[theme]
}