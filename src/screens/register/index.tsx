import {VStack, Text} from 'native-base'
import {Button} from '../../components/button'
import {Header} from '../../components/header'
import {Input} from '../../components/input'

export function RegisterPage() {
  return (
    <VStack flex={1} p={6} bg='gray.600'>
      <Header title='Nova solicitação' />
      <Input placeholder='Nũmero do patrimônio' mt={4} />
      <Input placeholder='Descrição do problema' mt={5} flex={1} multiline textAlignVertical='top' />
      <Button mt={5}>Cadastrar</Button>
    </VStack>
  )
}
