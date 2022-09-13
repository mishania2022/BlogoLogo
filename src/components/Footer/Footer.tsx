import React from 'react'
import { ExpDate, ToggleTheme, StyledFooter } from './styles'

export const Footer = () => {
  return (
    <div><StyledFooter>
    <ExpDate>©2022 Blogolog</ExpDate>
    <ToggleTheme>Dark theme</ToggleTheme>
  </StyledFooter></div>
  )
}
