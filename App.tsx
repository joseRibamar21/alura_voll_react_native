
import { NativeBaseProvider } from 'native-base';
import Cadastro from './src/Cadastro';
import { StatusBar } from 'expo-status-bar';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar animated  backgroundColor={THEME.blue[800]} />
      <Cadastro />
    </NativeBaseProvider>
  );
}
