import {  Text, View, ScrollView,Image, TextInput, Button, Alert } from 'react-native';
import appStyle from '../style/appStyle';

import HeaderTittle from '../compomentes/headerTittle';
import TabNavegation from '../compomentes/tabNavegation';
import { useState } from 'react';
import projeto from "../style/projeto";
export default function Projetos (){
    return(
        <View style={appStyle.background}>
            <HeaderTittle titulo='Projetos' subTitulo='Veja os meus projetos'/>
            <ScrollView style={appStyle.background}>

                    <View style={projeto.section}>
                        <View style={projeto.cardCaixa}>
                            <View style={projeto.card}>
                                 <Image style={projeto.banner} source={require("../../assets/big-data.jpg")} /> 
                                    <Text style={projeto.titleCard}>Big Data</Text>
                                    <Text style={projeto.descricaoCard}>Projeto Extensionista 2024.{"\n"} Com base no banco de dados meteorológico fornecido pelo INMET, usei algoritmos de regressão e classificação{"\n"}
                                                para prever a probabilidade de chuva.   </Text>

                            </View>
                        </View>
                        <View style={projeto.cardCaixa}>
                        <View style={projeto.card}>
                                 <Image style={projeto.banner}source={require("../../assets/Android_logo.png")} /> 
                                        <Text style={projeto.titleCard}>Android</Text>
                                        <Text style={projeto.descricaoCard}>Projeto feito em React Native para uma Clinica Médica</Text>

                            </View>
                        </View>
                    </View>
            </ScrollView>
            <View>
                <TabNavegation/>
            </View>
        </View>

    );
}