import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authSelectors from 'store/selectors/auth-selectors'
// eslint-disable-next-line
import { green } from 'logger'

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  green('PrivateRoute: loggedIn', loggedIn)
  return (
    <Route {...rest} render={(props) => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

const mapStateToProps = (state) => ({
  loggedIn: authSelectors.getLoggedIn(state)
})

export default connect(mapStateToProps, authSelectors)(PrivateRoute)