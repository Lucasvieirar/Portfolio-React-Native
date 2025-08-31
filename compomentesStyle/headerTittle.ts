import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  headerView: {
    backgroundColor: "#B84835",
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 6,


  },
  headerContent: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 25,


  },
  headerText:{
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    
  },
  headerInfo: {
    alignItems: "center",
    marginTop: 15,

  },
  headerInfoText: {
    color: "white",
    fontSize:15,

  },
  
});