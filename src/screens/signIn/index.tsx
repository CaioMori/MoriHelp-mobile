import React from 'react'
import {VStack, Heading} from 'native-base'
import Logo from '../../assets/logo_primary.svg'

const SignInPage = () => {
  return (
    <VStack flex={1} bg={'gray.600'} alignItems='center' px={8} pt={24}>
      <Logo />
      <Heading color={'gray.100'} fontSize={'xl'} mt={20} mb={26}>
        SignInPage
      </Heading>
    </VStack>
  )
}

export default SignInPage
