import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SiderbarDrawerProps {
  children: ReactNode
}

type SiderbarDrawerContextData = UseDisclosureReturn

const SiderbarDrawerContext = createContext({} as SiderbarDrawerContextData)

export function SiderbarDrawerProvider({ children }: SiderbarDrawerProps) {
  const disclosure = useDisclosure()

  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SiderbarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderbarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SiderbarDrawerContext)
