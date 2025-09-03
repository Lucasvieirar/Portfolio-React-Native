import {  Text, View, ScrollView,Image, TextInput, Button, Alert } from 'react-native';
import appStyle from '../style/appStyle';

import HeaderTittle from '../compomentes/headerTittle';
import TabNavegation from '../compomentes/tabNavegation';
import { useState } from 'react';

export default function Projetos (){
    return(
        <View style={appStyle.background}>
            <HeaderTittle />
            <ScrollView style={appStyle.background}>
                    
            </ScrollView>
            <View>
                <TabNavegation/>
            </View>
        </View>

    );
}