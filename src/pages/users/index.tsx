import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import Header from '@/components/header'
import { Pagination } from '@/components/pagination'
import { Sidebar } from '@/components/sidebar'
import { useUsers } from '@/hooks/useUsers'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'
import { useState } from 'react'

export default function UsersList() {
  const [page, setPage] = useState<number>(1)

  const { data, isLoading, isFetching, error } = useUsers(page)

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
              {!isLoading && isFetching && (
                <Spinner size={'sm'} color="gray.500" ml={'4'} />
              )}
            </Heading>

            <Link href={'/users/create'} passHref>
              <Button
                as="button"
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

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados do usuario</Text>
            </Flex>
          ) : (
            <>
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
                  {data &&
                    data.users.map((user: any) => {
                      return (
                        <Tr key={user.id}>
                          <Td px={['4', '4', '6']}>
                            <Checkbox colorScheme={'pink'} />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold"> {user.name} </Text>
                              <Text fontSize="sm" color={'gray.300'}>
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td> {user.createdAt} </Td>}
                        </Tr>
                      )
                    })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data?.totalCount as number}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
