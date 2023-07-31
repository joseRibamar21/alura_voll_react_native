import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Titulo } from "./components/Titulo";

export default function Login() {
  return (
    < VStack 
    flex={1} 
    alignItems={"center"}
    justifyContent={"center"}
     p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo >
        Faça seu login
      </Titulo>
      <Box w="100%">
        <FormControl mt={3}>
          <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
            Email
          </FormControl.Label>
          <Input
            placeholder="Digite seu email"
            size={"lg"}
            w={"100%"}
            borderRadius={'lg'}
            bgColor={'gray.100'}
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
            Senha
          </FormControl.Label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            size={"lg"}
            w={"100%"}
            borderRadius={'lg'}
            bgColor={'gray.100'}
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button
        w={'100%'}
        bg={'blue.500'}
        mt={10}
        borderRadius={'lg'}
      >
        Entrar
      </Button>

      <Link 
      href='https://devaraujo.dev.br/'
      mt={5}
      >
      Esqueceu sua senha?
      </Link>

      <Box w={'100%'} 
      mt={10}
      flexDirection="row"
       justifyContent={'center'}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text color={'blue.500'}>
          Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
