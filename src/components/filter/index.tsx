import {VStack, IButtonProps, Button, Text, useTheme} from 'native-base'

interface Props extends IButtonProps {
  isActive?: boolean
  type: 'open' | 'closed'
}

export function Filter({isActive = false, type, ...rest}: Props) {
  const {colors} = useTheme()
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[200]

  return (
    <Button
      variant='outline'
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor='gray.600'
      flex={1}
      size='sm'
      {...rest}>
      <Text color={isActive ? colorType : 'gray.300'} fontSize='xs' textTransform='uppercase'>
        {rest.children}
      </Text>
    </Button>
  )
}
