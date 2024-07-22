import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:5,
    marginBottom:10,
    width:'100%',
  },
  nameParticipant:{
    fontSize:16,
    color: '#FDFCFE',
    fontWeight:'bold',
    marginLeft:16,
    textAlign:'center'
  },
  ModalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "rgba(20, 20, 20, 0.8)"
  },
  ModalWrapper:{
    backgroundColor:"white",
    padding:24,
    borderRadius:8,
    alignItems:"center"
  },
  ModalTitle:{
    textAlign: "center",
    color:"black",
    fontSize:18,
    fontWeight:"bold",
  },
  ModalSubTitle:{
    textAlign: "center",
    color:"#333638",
    fontSize:14,
  },
  ModalButtonInteraction:{
    flexDirection: "row",
    gap:8,
    marginTop:20,
    width:"100%"
  }
})