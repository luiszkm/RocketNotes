import React from 'react'
import ReactDOM from 'react-dom/client'
import { SigIn } from './pages/SigIn'

import { ThemeProvider } from 'styled-components'


import GlobalStyle from './styles/global'
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme= {theme}>
      <GlobalStyle />
      <SigIn />
    </ThemeProvider>
  </React.StrictMode>
)
