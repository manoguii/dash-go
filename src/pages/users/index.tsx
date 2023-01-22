import Header from '@/components/header'
import { Pagination } from '@/components/pagination'
import { Sidebar } from '@/components/sidebar'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex={'1'} borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify={'space-between'} align="center">
            <Heading size="lg" fontWeight={'normal'}>
              Usuarios
            </Heading>

            <Link href={'/users/create'} passHref>
              <Button
                as="a"
                cursor={'pointer'}
                size="sma"
                p="2"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th px="6" color={'gray.300'} width="8">
                  <Checkbox colorScheme={'pink'} />
                </Th>
                <Th>Usuario</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme={'pink'} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guilherme David</Text>
                    <Text fontSize="sm" color={'gray.300'}>
                      guilhermedavidrk@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>20 de fevereiro, 2000</Td>}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme={'pink'} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guilherme David</Text>
                    <Text fontSize="sm" color={'gray.300'}>
                      guilhermedavidrk@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>20 de fevereiro, 2000</Td>}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme={'pink'} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guilherme David</Text>
                    <Text fontSize="sm" color={'gray.300'}>
                      guilhermedavidrk@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>20 de fevereiro, 2000</Td>}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
