import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type PropsBotao={
  tipo:string;
  cor: "green" | "red"| "#131016" |"#F2F2F2";
  metodo: ()=>void;
}
export function Botao({tipo,cor,metodo}:PropsBotao){
  return (
    <TouchableOpacity
    onPress={metodo}
    style={[{backgroundColor:cor},styles.botao]}
  >
    <Text style={styles.titleBotao}>{tipo}</Text>
  </TouchableOpacity>
  )
}