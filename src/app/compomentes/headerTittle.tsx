
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  headerTittle  from "../compomentesStyle/headerTittle";
export default function HeaderTittle({
  titulo = "Sobre Mim",
  subTitulo = "Olá, me chamo Lucas Vieira",
}) {
  
  return (
    <View style={headerTittle.headerView}>
    <ScrollView  stickyHeaderHiddenOnScroll={true}>
    <View style={headerTittle.headerContent}>
        <Text style={headerTittle.headerText}>{titulo}</Text>    
    </View>

    <View style={headerTittle.headerInfo}>
            <Text style={headerTittle.headerInfoText}>{subTitulo}</Text>
          </View>
    </ScrollView>
    </View>
  );
}