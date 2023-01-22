import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './logo'
import { Notifications } from './notifications'
import { Profile } from './profile'
import { Search } from './search'

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      w={'100%'}
      as="header"
      maxWidth={1480}
      h="20"
      mx={'auto'}
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml={'auto'}>
        <Notifications />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
