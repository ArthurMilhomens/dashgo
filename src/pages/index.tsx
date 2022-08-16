import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email("E-mail inválido"),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
    console.log(data)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" error={formState.errors.email} {...register('email')} />
          <Input name="password" label="Senha" type="password" error={formState.errors.password} {...register('password')} />
        </Stack>

        <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="green">Entrar</Button>
      </Flex>
    </Flex>
  )
}
