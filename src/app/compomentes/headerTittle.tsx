
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  headerTittle  from "../compomentesStyle/headerTittle";
export default function HeaderTittle() {
  return (
    <View style={headerTittle.headerView}>
    <ScrollView  stickyHeaderHiddenOnScroll={true}>
    <View style={headerTittle.headerContent}>
        <Text style={headerTittle.headerText}>Sobre Mim</Text>    
    </View>

    <View style={headerTittle.headerInfo}>
            <Text style={headerTittle.headerInfoText}>Olá, me chamo Lucas Vieira Ribeiro</Text>
          </View>
    </ScrollView>
    </View>
  );
}