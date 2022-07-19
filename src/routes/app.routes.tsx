import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DetailsPage} from '../screens/details'
import {HomePage} from '../screens/home'
import {RegisterPage} from '../screens/register'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='home' component={HomePage} />
      <Screen name='register' component={RegisterPage} />
      <Screen name='details' component={DetailsPage} />
    </Navigator>
  )
}
