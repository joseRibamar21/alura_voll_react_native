import { Text, ITextProps } from "native-base";

interface TituloProps extends ITextProps {
    children: string;
}

export function Titulo({children, ...rest}:TituloProps){
    return(
        <Text fontSize="2xl" fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
        {...rest}
      >
        {children}
      </Text>
    )
}