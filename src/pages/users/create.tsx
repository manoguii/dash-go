import { Input } from '@/components/Form/Input'
import Header from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { api } from '@/services/api'
import { queryClient } from '@/services/queryClient'
import { useRouter } from 'next/router'

interface CreateUserFormData {
  email: string
  name: string
  password: string
  password_confirmation: string
}

const signInFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required('A senha e obrigatoria').min(6),
  password_confirmation: yup
    .string()
    .oneOf([undefined, yup.ref('password')], 'As senhas devem ser iguais'),
})

export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post('/api/users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      })

      return response.data.user
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
    },
  )

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleCreateUser = async (values: CreateUserFormData) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser as any)}
          flex={'1'}
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
        >
          <Heading size={'lg'} fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor={'gray.700'} />

          <VStack spacing={'8'}>
            <SimpleGrid minChildWidth={'240px'} spacing={['4', '6']} w="100%">
              <Input isRequired label="Nome completo" {...register('name')} />
              <Input isRequired label="E-mail" {...register('email')} />
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing={['4', '6']} w="100%">
              <Input
                isRequired
                type="password"
                label="Senha"
                error={formState.errors.password}
                {...register('password')}
              />
              <Input
                isRequired
                type="password"
                label="Confirma senha"
                error={formState.errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify={'flex-end'}>
            <HStack spacing="4">
              <Link href={'/users'} passHref>
                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme={'pink'}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
