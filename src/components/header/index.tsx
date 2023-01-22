import { useSidebarDrawer } from '@/contexts/SiderbarDrawerContext'
import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from './logo'
import { Notifications } from './notifications'
import { Profile } from './profile'
import { Search } from './search'

export default function Header() {
  const { onOpen } = useSidebarDrawer()

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigatio"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml={'auto'}>
        <Notifications />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
