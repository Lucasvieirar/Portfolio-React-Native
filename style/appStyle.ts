import { StyleSheet} from 'react-native';


export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  foto:{
    width: 200,
    height: 200,
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  viewText: {
    marginBottom: 20,
    marginTop: 40,
    padding: 5,


  },
  text: {
    textAlign: "center",
    fontSize: 16,

  },
  textBold: {
    fontWeight: "bold",

  },
  formCaixa:{
    marginBottom: 30,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#cfc9c9ff",


  },
  formText:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 14,
  },
  formInput:{
    padding:12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    outlineWidth: 0,
  },
  formInputMsg:{
    height: 80,
    padding:15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    outlineWidth: 0,
  },
  retorno:{
  color: "green",

  },
});