import React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store/store'
import Routes from "./routes";
import "./App.css"

setConfig({
  showReactDomPatchNotification: false
})

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes/>
        </ConnectedRouter>
      </Provider>
    </React.Fragment>
  )
}

export default hot(module)(App)
