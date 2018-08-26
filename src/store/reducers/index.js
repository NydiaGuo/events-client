import { combineReducers } from 'redux'
import requests from './requests'
import imageUpload from './upload-image'
import auth from './auth'
import { events, eventsUi } from './events'
import { postalCodes } from './location'
import { reducer as formReducer } from 'redux-form'
import snackbar from './snackbar'
import appMenu from './app-menu'

export default combineReducers({
  events,
  eventsUi,
  imageUpload,
  postalCodes,
  requests,
  snackbar,
  appMenu,
  form: formReducer,
  auth
})
