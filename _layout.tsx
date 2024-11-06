
import React,{ useState  } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function App(){
  const [nome, setNome] = useState(''); //estado para armazenar os dados do formulário
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');  
  const mostrarResultado =()=>{setResultado(`Nome: ${nome}, Idade: ${idade}`);};

  //inserindo o texto na tela
  return(
    <View>
      <Text>FORMULÁRIO DOS CRIAS</Text>

      <TextInput
          placeholder="Digite o Seu Nome"//mensagem
          value={nome}//inserir o valor nome
          onChangeText={setNome} //jogando o valor Nome vai ser carregado no formulario
      />

      <TextInput
          placeholder="Digite a Sua Idade"
          value={idade}
          onChangeText={setIdade} //jogando o valor Nome vai ser carregado no formulario
      />

      <Button title="Mostrar Resultado" onPress= {mostrarResultado} ></Button>


      {resultado?(
        <Text>{resultado}</Text>):null} 
    </View>
  )  
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    padding: 20,
    backgroundColor:'#fff',
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },

  input:{
    height:40,
    borderColor:'#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  resultado:{
    marginTop: 20,
    fontSize: 18,
    color:'#333',
    textAlign:'center',
  },


})
