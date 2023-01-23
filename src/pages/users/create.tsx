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

interface CreateUserFormData {
  email: string
  name: string
  password: string
  password_confirmattion: string
}

const signInFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required('A senha e obrigatoria').min(6),
  password_confirmattion: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas devem ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  console.log(formState.errors)

  const handleCreateUser = (values: CreateUserFormData) => {
    console.log(values)
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
            Criar usuario
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
                error={formState.errors.password_confirmattion}
                {...register('password_confirmattion')}
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
