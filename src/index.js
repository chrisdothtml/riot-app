import reducer from './reducer'
import { createStore } from 'redux'
import riot from 'riot'
import reduxMixin from 'riot-redux-mixin'
import './tags/Notes/index.tag'

riot.mixin(reduxMixin(createStore(reducer)))
riot.mount('Notes')
