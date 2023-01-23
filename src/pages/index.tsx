import { Input } from '@/components/Form/Input'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

export default function Home() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleSignIn = (data: SignInFormData) => {
    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
        flexDir={'column'}
        onSubmit={handleSubmit(handleSignIn as any)}
      >
        <Stack spacing={4}>
          <Input
            type={'email'}
            label="E-mail"
            isRequired
            {...register('email')}
          />
          <Input
            type={'password'}
            isRequired
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt={6}
          colorScheme="pink"
          size={'lg'}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
