import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
}
export function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      placeholder="digite o nome do participante"
      style={styles.inputEvento}
      placeholderTextColor="#757477"
      { ...rest }
    />
  )
}