import React from 'react'
import SignInPage from './src/screens/signIn'
import {NativeBaseProvider, StatusBar} from 'native-base'
import {THEME} from './src/styles/theme'
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import Loading from './src/components/loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar hidden />
      {fontsLoaded ? <SignInPage /> : <Loading />}
    </NativeBaseProvider>
  )
}
