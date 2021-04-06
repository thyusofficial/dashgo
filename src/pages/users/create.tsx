import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from '../../components/Form/Input'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from "next/link";


type CreateUserInFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No minímo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})


export default function CreateUser() {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);

  }

  return (
    <Box>
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          background="gray.800"
          borderRadius={8}
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                ref={register}
              />

              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                ref={register}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                ref={register}

              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                ref={register}

              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
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