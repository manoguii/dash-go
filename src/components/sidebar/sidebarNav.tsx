import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'
import { NavLink } from './navLink'
import { NavSection } from './navSection'

export function SidebarNav() {
  return (
    <Stack spacing={'12'} align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
    </Stack>
  )
}
