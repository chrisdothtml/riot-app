import reducer from './reducer'
import { createStore } from 'redux'
import riot from 'riot'
import reduxMixin from 'riot-redux-mixin'
import './tags/Notes/index.tag'

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__

riot.mixin(reduxMixin(createStore(reducer, reduxTools && reduxTools())))
riot.mount('Notes')
