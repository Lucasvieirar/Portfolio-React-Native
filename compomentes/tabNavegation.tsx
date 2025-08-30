
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import  tabNavegation from "../compomentesStyle/tabNavegation";
export default function TabNavegation() {
  return (
    <ScrollView stickyHeaderHiddenOnScroll={true}>
    <View>
        <Button title='Sobre Mim'/>
        <Button title='Projetos'/>     
    </View>
    </ScrollView>
  );
}