import { Text, Image, Checkbox, Box , ScrollView} from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { useState } from "react";
import { Botao } from "./components/Botao";
import { sessions } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [secao, setSecao] = useState(0)

  

  function handleSecao() {
    if (secao < sessions.length - 1) {
      setSecao(secao + 1)
    }
  }

  function handleSecaoAnterior() {
    if (secao > 0) {
      setSecao(secao - 1)
    }
  }

  return (
    
    < ScrollView m={5}>

      <Image source={Logo} mt={20} alt="Logo Voll" alignSelf={'center'} />
      <Titulo >
        {sessions[secao].title}
      </Titulo>
      <Box w="100%">
        {sessions[secao].entradaTexto.map(s => {
          return (
            <EntradaTexto
              key={s.id}
              label={s.label}
              placeholder={s.placeholder}
            />
          )
        })}
      </Box>
      <Box w="100%">
        {sessions[secao].checkbox.length>0 && <Text color={'blue.800'} fontWeight={'bold'}>
          Selecione o plano:
        </Text>}
        {sessions[secao].checkbox.map(s => {
          return (
            <Checkbox
              key={s.id}
              value={s.value}

            >
              {s.value}
            </Checkbox>
          )
        })}
      </Box>
      <Botao onPress={handleSecao}>
        Avançar
      </Botao>

      {secao > 0 && <Botao color="gray.400" onPress={handleSecaoAnterior}>
        Voltar
      </Botao>}
    </ScrollView>
  );
}
