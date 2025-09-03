
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import  tabNavegation from "../compomentesStyle/tabNavegation";
export default function TabNavegation() {
  return (
    <ScrollView stickyHeaderHiddenOnScroll={true}>
    <View style={tabNavegation.tabNavegation}>
    <TouchableOpacity style={tabNavegation.tabButton} >
      <Text style={tabNavegation.tabText}>Sobre Mim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tabNavegation.tabButton} >
      <Text style={tabNavegation.tabText}>Projetos</Text>
      </TouchableOpacity>

      </View>
    </ScrollView>
  );
}