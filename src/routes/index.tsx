import {NavigationContainer} from '@react-navigation/native'
import {AppRoutes} from './app.routes'
import {SignInPage} from '../screens/signIn'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
