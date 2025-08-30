
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  headerTittle  from "../compomentesStyle/headerTittle";
export default function HeaderTittle() {
  return (
    <ScrollView style={headerTittle.headerView} stickyHeaderHiddenOnScroll={true}>
    <View style={headerTittle.headerContent}>
        <Text>Sobre Mim</Text>    
    </View>

    <View style={headerTittle.headerInfo}>
            <Text style={headerTittle.headerInfoText}>Olá, me chamo Lucas Vieira Riberio, curso Ciência da Computação</Text>
          </View>
    </ScrollView>
  );
}