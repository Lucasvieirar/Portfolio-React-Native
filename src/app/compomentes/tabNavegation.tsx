
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import  tabNavegation from "../compomentesStyle/tabNavegation";
import { useRouter } from "expo-router";
export default function TabNavegation() {
  const router = useRouter();
  return (
    <ScrollView stickyHeaderHiddenOnScroll={true}>
    <View style={tabNavegation.tabNavegation}>
    <TouchableOpacity style={tabNavegation.tabButton} >
      <Text style={tabNavegation.tabText } onPress={() => router.replace("/sobre-mim")}>Sobre Mim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tabNavegation.tabButton} >
      <Text style={tabNavegation.tabText} onPress={() => router.replace("/projeto")}>Projetos</Text>
      </TouchableOpacity>

      </View>
    </ScrollView>
  );
}