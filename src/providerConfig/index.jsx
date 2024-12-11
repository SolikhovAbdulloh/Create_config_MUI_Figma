import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../provider'

function ConfigProvayder({children}) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default ConfigProvayder