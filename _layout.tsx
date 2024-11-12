import React,{ useState  } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function App(){
  const [nome, setNome] = useState(''); //estado para armazenar os dados do formulário
  const [cargo, setCargo] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [da, setDA] = useState('');
  const [resultado, setResultado] = useState('');  
  const mostrarResultado =()=>{setResultado(`
    Nome:${nome} -
    Cargo:${cargo} -
    Idade:${idade} -
    Telefone:${telefone} -
    Email:${email} - 
    Data De Admissão:${da}
    `);};

    const mostrarResultado =()=> //alerta caso os campos não forem preenchidos
    {
      if(nome && cargo && idade && telefone && email && da){
      setResultado(` Nome:${nome}, Cargo:${cargo}, Idade:${idade}, Telefone:${telefone}, E-mail:${email}, Data_Admissão:${da}`);
      }else{
        alert("Por favor, preencha todos os campos");
      }
      };

  //inserindo o texto na tela
  return(
    <View>
      <Text>FORMULÁRIO</Text>

      <TextInput
          placeholder="Digite o Seu Nome"//mensagem
          value={nome}//inserir o valor nome
          onChangeText={setNome} //jogando o valor NOME vai ser carregado no formulario
      />

<TextInput
          placeholder="Digite O Seu Cargo"
          value={cargo}
          onChangeText={setCargo} //jogando o valor CARGO vai ser carregado no formulario
      />

      <TextInput
          placeholder="Digite a Sua Idade"
          value={idade}
          onChangeText={setIdade} //jogando o valor IDADE vai ser carregado no formulario
      />

<TextInput
          placeholder="Digite o Seu Telefone"
          value={telefone}
          onChangeText={setTelefone} //jogando o valor TELEFONE vai ser carregado no formulario
      />

<TextInput
          placeholder="Digite o Seu Email"
          value={email}
          onChangeText={setEmail} //jogando o valor EMAIL vai ser carregado no formulario
      />

<TextInput
          placeholder="Digite a Sua Data de Admissão"
          value={da}
          onChangeText={setDA} //jogando o valor DATA DE ADMISSÃO vai ser carregado no formulario
      />

      <Button title="Cadastar" onPress= {mostrarResultado} ></Button>


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
