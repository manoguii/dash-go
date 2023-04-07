import { ElementType } from 'react'
import { ActiveLink } from '../activeLink'
import {
  Link as ChakraLink,
  Text,
  Icon,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display={'flex'} as="span" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight={'bold'}>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
