import React from 'react'
import SignInPage from './src/screens/signIn'
import {NativeBaseProvider} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <SignInPage />
    </NativeBaseProvider>
  )
}
