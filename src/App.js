import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import store from "./store"
import { Provider } from 'react-redux'

import ZHeader from '@/components/app-header'
import ZFooter from '@/components/app-footer'

import routes from './router'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZHeader />
        {
          renderRoutes(routes)
        }
        <ZFooter />
      </HashRouter>
    </Provider>
  )
})
