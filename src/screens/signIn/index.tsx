import React, {useState} from 'react'
import {VStack, Heading, Icon, useTheme} from 'native-base'
import Logo from '../../assets/logo_primary.svg'
import {Input} from '../../components/input'
import {Envelope, Key} from 'phosphor-react-native'
import {Button} from '../../components/button'

const SignInPage = () => {
  const {colors} = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('submit', email, password)
  }

  return (
    <VStack flex={1} bg={'gray.600'} alignItems='center' px={8} pt={24}>
      <Logo />
      <Heading color={'gray.100'} fontSize={'xl'} mt={20} mb={26}>
        Acesse sua conta
      </Heading>
      <Input
        autoCorrect={false}
        autoCapitalize={'none'}
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
        placeholder='E-mail'
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
      />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder='Senha'
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
      />
      <Button w='full' onPress={handleSubmit}>
        Entrar
      </Button>
    </VStack>
  )
}

export default SignInPage
