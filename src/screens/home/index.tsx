import {Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Center} from 'native-base'
import {ChatTeardropText, SignOut} from 'phosphor-react-native'
import {useState} from 'react'
import Logo from '../../assets/logo_secondary.svg'
import {Button} from '../../components/button'
import {Filter} from '../../components/filter'
import {Order, OrderProps} from '../../components/order'
import {useNavigation} from '@react-navigation/native'

export function HomePage() {
  const {colors} = useTheme()
  const navigation = useNavigation()
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([])

  const handleNewOrder = () => {
    navigation.navigate('register')
  }

  const handleDetails = (orderId: number) => {
    navigation.navigate('details', {orderId})
  }

  return (
    <VStack flex={1} bg='gray.700' pb={6}>
      <HStack w='full' justifyContent='space-between' alignItems='center' bg='gray.600' pt={12} pb={5} px={6}>
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack mt={8} mb={4} justifyContent='space-between' alignItems='center'>
          <Heading color='gray.100'>Solicitações</Heading>
          <Text color='gray.200'>{orders.length}</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter type='open' onPress={() => setStatusSelected('open')} isActive={statusSelected === 'open'}>
            em andamento
          </Filter>
          <Filter type='closed' onPress={() => setStatusSelected('closed')} isActive={statusSelected === 'closed'}>
            finalizados
          </Filter>
        </HStack>
        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color='gray.300' fontSize='xl' mt={6} textAlign='center'>
                Você ainda não possui {'\n'} solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Order onPress={() => handleDetails(item.id)} data={item} />}
        />
        <Button onPress={handleNewOrder}>Nova solicitação</Button>
      </VStack>
    </VStack>
  )
}
