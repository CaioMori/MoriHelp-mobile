import {Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base'

export function Button({...rest}: IButtonProps) {
  return (
    <ButtonNativeBase bg='green.700' h={14} fontSize='sm' rounded='sm' _pressed={{bg: 'green.500'}} {...rest}>
      <Heading color='white' fontSize='sm'>
        {rest.children}
      </Heading>
    </ButtonNativeBase>
  )
}
