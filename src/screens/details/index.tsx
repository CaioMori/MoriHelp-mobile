import {VStack} from 'native-base'
import {Header} from '../../components/header'
import {useRoute} from '@react-navigation/native'

interface RouteParams {
  orderId: number
}

export function DetailsPage() {
  const route = useRoute()
  const {orderId} = route.params as RouteParams

  return (
    <VStack flex={1} bg='gray.700'>
      <Header title='solicitação' />
    </VStack>
  )
}
