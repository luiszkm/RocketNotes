import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'

import { MyContext } from './myContext'

import GlobalStyle from './styles/global'
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{email:'luiszkm@gmail.com'}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
