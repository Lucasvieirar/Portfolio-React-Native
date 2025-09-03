import {  Text, View, ScrollView,Image, TextInput, Button, Alert } from 'react-native';
import appStyle from './style/appStyle';

import HeaderTittle from './compomentes/headerTittle';
import TabNavegation from './compomentes/tabNavegation';
import { useState } from 'react';
export default function App() {

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!name || !message){
      Alert.alert("Preencha todos os campos");
      return;
    }
    setFormSubmitted(true);
    Alert.alert("Formulário enviado com sucesso");

  };


  return (
    <View style={appStyle.background}>
      <HeaderTittle/>
      <ScrollView style={appStyle.background}>
        <Image style={appStyle.foto} source={require("./assets/foto.png")}/>
        <View style={appStyle.viewText}>
          <Text style={appStyle.text}>
            Sou proativo, gosto de desafios e tenho um forte interesse em pesquisa e desenvolvimento. {"\n"}
            Busco constantemente aprender novas tecnologias e conceitos na área de Ciência de Dados, {"\n"}
            visando sempre melhorar minhas habilidades e me manter atualizado com as tendências do mercado. {"\n\n"}
            <Text style={appStyle.textBold}>Habilidades</Text>{"\n"}
            <Text style={appStyle.textBold}>Linguagens:</Text>Python, C, Java{"\n"}
            <Text style={appStyle.textBold}>Bibliotecas e Ferramentas:</Text>Pandas, NumPy, Matplotlib, Scikit-Learn, TensorFlow, Keras, Langchain{"\n"}
            <Text style={appStyle.textBold}>Banco de Dados:</Text>PostgreSQL{"\n"} 
            <Text style={appStyle.textBold}>Conceitos: </Text>Estruturas de Dados, Programação Orientada a Objetos (POO), Redes de Computadores, Algoritmos de Machine Learning e Deep Learning{"\n"}
          </Text>
        </View>
        <View style={appStyle.formCaixa}>
          <Text style={appStyle.formText}>Contato</Text>
          <TextInput style={appStyle.formInput} placeholder="Seu nome" value={name} onChangeText={setName}/>
          <TextInput style={appStyle.formInputMsg}  placeholder="Sua mensagem" value={message} onChangeText={setMessage}/>
          <Button  title='Enviar' onPress={handleSubmit}/>
          {formSubmitted && <Text style={appStyle.retorno}>Formulario enviado</Text>}
        </View>
        

      </ScrollView>
      <View>
    <TabNavegation/>
    </View>
    
    </View>
    
  );
}
// npx create-expo-app@latest portifolio -t expo-template-blank-typescript

