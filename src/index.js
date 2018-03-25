import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/css/index.css'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import WebFont from 'webfontloader'
import configureStore from 'store/configureStore'

WebFont.load({
  google: {
    families: ['Roboto', 'Montserrat', 'sans-serif']
  }
})

const store = configureStore()
store.dispatch({ type: 'CLEAR' })

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
